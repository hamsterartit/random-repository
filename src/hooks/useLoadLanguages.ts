import { useEffect, useState } from "react";
import { LANGUAGES_URL } from "../utils/constants";
import type { Language } from "../utils/models";

export function useLoadLanguages(): Language[] {
    const [languages, setLanguages] = useState<Language[]>([]);

    useEffect(() => {
        const loadLanguages = async () => {
            try {
                const response = await fetch(LANGUAGES_URL);
                const data: Language[] = await response.json();
                setLanguages(data);
            } catch (error) {
                console.error("Error fetching languages:", error);
            }
        };

        void loadLanguages();
    }, []);

    return languages;
}