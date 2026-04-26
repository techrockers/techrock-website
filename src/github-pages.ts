export function getGitHubPagesBasePath() {
  const [repositoryOwnerFromSlug = "", repositoryName = ""] =
    process.env.GITHUB_REPOSITORY?.split("/") ?? [];
  const repositoryOwner =
    process.env.GITHUB_REPOSITORY_OWNER ?? repositoryOwnerFromSlug;
  const hasCustomDomain =
    Boolean(process.env.GITHUB_PAGES_CUSTOM_DOMAIN) ||
    Boolean(process.env.NEXT_PUBLIC_SITE_DOMAIN);
  const isUserOrOrganizationPage =
    repositoryName.toLowerCase() ===
    `${repositoryOwner.toLowerCase()}.github.io`;

  if (process.env.GITHUB_ACTIONS !== "true") {
    return "";
  }

  if (!repositoryName || isUserOrOrganizationPage || hasCustomDomain) {
    return "";
  }

  return `/${repositoryName}`;
}

export function withBasePath(path: `/${string}`) {
  return `${getGitHubPagesBasePath()}${path}`;
}
