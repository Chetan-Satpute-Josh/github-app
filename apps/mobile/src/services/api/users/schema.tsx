import { z } from "zod";

// Plan schema (used by both private and public users)
const GitHubPlanSchema = z.object({
  collaborators: z.number(),
  name: z.string(),
  space: z.number(),
  private_repos: z.number(),
});

// Base user schema with common properties
const BaseUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.url(),
  gravatar_id: z.string().nullable(),
  url: z.url(),
  html_url: z.url(),
  followers_url: z.url(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.url(),
  organizations_url: z.url(),
  repos_url: z.url(),
  events_url: z.string(),
  received_events_url: z.url(),
  type: z.string(),
  site_admin: z.boolean(),
  name: z.string().nullable(),
  company: z.string().nullable(),
  blog: z.string().nullable(),
  location: z.string().nullable(),
  email: z.email().nullable(),
  notification_email: z.email().nullable(),
  hireable: z.boolean().nullable(),
  bio: z.string().nullable(),
  twitter_username: z.string().nullable(),
  public_repos: z.number(),
  public_gists: z.number(),
  followers: z.number(),
  following: z.number(),
  created_at: z.iso.datetime(),
  updated_at: z.iso.datetime(),
});

// Private user schema (extends base with additional private fields)
const PrivateUserSchema = BaseUserSchema.extend({
  user_view_type: z.string(),
  private_gists: z.number(),
  total_private_repos: z.number(),
  owned_private_repos: z.number(),
  disk_usage: z.number(),
  collaborators: z.number(),
  two_factor_authentication: z.boolean(),
  plan: GitHubPlanSchema,
  business_plus: z.boolean().optional(),
  ldap_dn: z.string().optional(),
});

// Public user schema (extends base with optional private fields)
const PublicUserSchema = BaseUserSchema.extend({
  user_view_type: z.string().optional(),
  plan: GitHubPlanSchema.optional(),
  private_gists: z.number().optional(),
  total_private_repos: z.number().optional(),
  owned_private_repos: z.number().optional(),
  disk_usage: z.number().optional(),
  collaborators: z.number().optional(),
});

// Union schema for GitHub user (can be either private or public)
export const GitHubUserSchema = z.union([PrivateUserSchema, PublicUserSchema]);

// Type inference
export type GitHubUser = z.infer<typeof GitHubUserSchema>;
export type PrivateGitHubUser = z.infer<typeof PrivateUserSchema>;
export type PublicGitHubUser = z.infer<typeof PublicUserSchema>;
export type GitHubPlan = z.infer<typeof GitHubPlanSchema>;
