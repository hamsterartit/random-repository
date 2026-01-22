export interface Language {
    title: string;
    value: string;
}

export interface Repository {
    id: number;
    name: string;
    description: string | null;
    language: string;
    stars: number;
    forks: number;
    openIssues: number;
    url: string;
}

export type Status  = 'default' | 'loading' | 'error' | 'success' | 'empty';

export interface StateOption {
    message: string;
    buttonText: string;
}


