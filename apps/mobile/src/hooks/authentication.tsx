import { useAuth } from "#contexts/AuthContext";

export function useIsSignedIn() {
  const { user } = useAuth();

  return !!user;
}

export function useIsSignedOut() {
  return !useIsSignedIn();
}
