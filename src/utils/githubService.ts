import { getGithubUrl, mappedRepo } from "./utils.ts";
import type { Repository } from "./models.ts";

export async function fetchRandomRepo(language: string): Promise<Repository | null> {
    const url = getGithubUrl(language);
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * data.items.length);
    return mappedRepo(data.items[randomIndex]);
}