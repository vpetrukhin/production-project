export const getApiUrl = (isDev: boolean, url?: string) => {
    if (url) {
        return url;
    }

    if (isDev) {
        return 'http://localhost:8000';
    } else {
        return '/api';
    }
}