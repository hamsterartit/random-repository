import { useState } from "react";
import type { Repository, Status } from "../utils/models.ts";
import { fetchRandomRepo } from "../utils/githubService.ts";

export function useRandomRepo() {
    const [status, setStatus] = useState<Status>('default');
    const [repo, setRepo] = useState<Repository | null>(null);

    const search = async (language: string) => {
        try {
            setStatus('loading');

            const result = await fetchRandomRepo(language);

            if (!result) {
                setStatus('empty');
                return;
            }

            setRepo(result);
            setStatus('success');

        } catch (error) {
            console.log('Fetch random repository failed: ', error);
            setStatus('error');
        }
    };

    return { status, repo, search };
}