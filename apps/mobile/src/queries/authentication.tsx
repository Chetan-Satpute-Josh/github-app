import { useQuery } from "@tanstack/react-query";
import { fetchAuthenticatedUser } from "#services/api/users/index";
import { GitHubUser } from "#services/api/users/schema";

export const AUTHENTICATED_USER = "authenticated-user";

export function useAuthenticatedUserQuery({ enabled }: { enabled: boolean }) {
  return useQuery({
    queryKey: [AUTHENTICATED_USER],
    queryFn: fetchAuthenticatedUser,
    select: (data): GitHubUser | null => {
      return data.isValid ? data.result : null;
    },
    enabled,
  });
}
