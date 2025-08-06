import { QueryClient } from "@tanstack/react-query";

/**
 * Singleton instance of QueryClient
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Don't retry on error by default
      retry: false,
      // Consider data fresh for 5 minutes
      staleTime: 1000 * 60 * 5,
      // Refetch on mount or reconnect only if stale
      refetchOnMount: "always",
      refetchOnReconnect: true,
    },
  },
});
