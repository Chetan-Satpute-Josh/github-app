import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  AUTHENTICATED_USER,
  useAuthenticatedUserQuery,
} from "#queries/authentication";
import { GitHubUser } from "#services/api/users/schema";
import {
  StorageKey,
  getStorageItem,
  setStorageItem,
  removeStorageItem,
} from "#services/asyncStorage";
import axiosInstance from "#services/axios";

interface AuthContextType {
  isLoading: boolean;
  user: GitHubUser | null;
  token: string | null;
  isAuthenticated: boolean;
  refreshUser: () => void;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenLoaded, setTokenLoaded] = useState(false);
  const queryClient = useQueryClient();

  // Load token once from AsyncStorage
  useEffect(() => {
    (async () => {
      const storedToken = await getStorageItem(StorageKey.AuthToken);

      if (storedToken) {
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${storedToken}`;

        setToken(storedToken);
      }

      setTokenLoaded(true);
    })();
  }, []);

  // Fetch user if token is present and tokenLoaded is true
  const { data: user = null, isLoading: isUserLoading } =
    useAuthenticatedUserQuery({
      enabled: tokenLoaded && !!token,
    });

  const refreshUser = () => {
    queryClient.invalidateQueries({ queryKey: [AUTHENTICATED_USER] });
  };

  const login = async (newToken: string) => {
    await setStorageItem(StorageKey.AuthToken, newToken);
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${newToken}`;
    setToken(newToken);
    refreshUser();
  };

  const logout = async () => {
    await removeStorageItem(StorageKey.AuthToken);
    delete axiosInstance.defaults.headers.common["Authorization"];
    setToken(null);
    queryClient.removeQueries({ queryKey: [AUTHENTICATED_USER] });
  };

  // Overall loading: either token not yet loaded or user is being fetched
  const isLoading = !tokenLoaded || (token !== null && isUserLoading);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
        token,
        isAuthenticated: !!user,
        refreshUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
