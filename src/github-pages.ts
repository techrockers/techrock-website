export function getGitHubPagesBasePath() {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
  const isUserOrOrganizationPage = repositoryName.endsWith(".github.io");

  if (process.env.GITHUB_ACTIONS !== "true") {
    return "";
  }

  if (!repositoryName || isUserOrOrganizationPage) {
    return "";
  }

  return `/${repositoryName}`;
}

export function withBasePath(path: `/${string}`) {
  return `${getGitHubPagesBasePath()}${path}`;
}
