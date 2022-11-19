export const getQueryParams = (params: RecordOptional<string, string>) => {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
            searchParams.set(key, value);
        }
    });

    return `${searchParams.toString()}`;
};

export const addQueryParams = (params: RecordOptional<string, string>) => {
    window.history.pushState(null, '', `${window.location.pathname}?${getQueryParams(params)}`);
};