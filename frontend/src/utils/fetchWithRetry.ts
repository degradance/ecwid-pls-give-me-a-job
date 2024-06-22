export const fetchWithRetry = async (
    url: string,
    options: RequestInit = {},
    retries: number = 3,
    retryDelay: number = 1000
): Promise<Response> => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
        }
        return response;
    } catch (error) {
        if (retries > 1) {
            await new Promise(res => setTimeout(res, retryDelay));
            return fetchWithRetry(url, options, retries - 1, retryDelay);
        } else {
            throw error;
        }
    }
};
