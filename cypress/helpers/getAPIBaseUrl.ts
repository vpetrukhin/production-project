/**
 * Получение API url
 * @param url без начального слэша (example: 'profile/1')
 * @returns API url
 */
export const getAPIUrl = (url: string) => `http://localhost:8000/${url}`;