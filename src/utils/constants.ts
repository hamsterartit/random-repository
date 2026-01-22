import type {StateOption, Status} from "./models.ts";


export const LANGUAGES_URL = '/languages.json'

export const STATE_OPTIONS: Record<Status, StateOption> = {
    default: {
        message: 'Please select a language',
        buttonText: 'Find'
    },
    loading: {
        message: 'Loading, please wait..',
        buttonText: 'Find'
    },
    error: {
        message: 'Error fetching repositories',
        buttonText: 'Click to retry'
    },
    success: {
        message: '',
        buttonText: 'Refresh'
    },
    empty: {
        message: 'No repositories',
        buttonText: 'Try again'
    }
}