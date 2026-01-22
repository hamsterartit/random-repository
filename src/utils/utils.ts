import type {Repository} from "./models.ts";

export const mappedRepo = (item: any):Repository => ({
    id: item.id,
    name: item.name,
    description: item.description,
    language: item.language ?? 'Not specified',
    stars: item.stargazers_count, // мапим поле GitHub API
    forks: item.forks_count,
    openIssues: item.open_issues_count,
    url: item.html_url,
})


export const getGithubUrl = (language: string): string => {
    const query = language ? `language:${language}` : 'stars:>1';

    return `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=30`;
};