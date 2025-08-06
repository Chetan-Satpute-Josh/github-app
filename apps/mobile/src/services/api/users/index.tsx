import axiosInstance from "#services/axios";
import { GitHubUserSchema, type GitHubUser } from "#services/api/users/schema";
import { ResponseData } from "#services/api/types";

/**
 * Fetches the currently authenticated GitHub user
 * @returns Validated GitHubUser object
 *
 * Usage:
 * ```ts
 * const user = await fetchAuthenticatedUser();
 * console.log(user.login);
 * ```
 */
export async function fetchAuthenticatedUser(): Promise<
  ResponseData<GitHubUser>
> {
  const response = await axiosInstance.get("/user");

  await new Promise((resolve) => setTimeout(() => resolve(null), 10000));

  const { success } = GitHubUserSchema.safeParse(response.data);

  return { isValid: success, result: response.data as GitHubUser };
}
