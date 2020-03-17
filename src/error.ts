import { AxiosError } from "axios";

export function axiosErrorToJSON(err: AxiosError) {
    return {
        stack: err.stack,
        message: err.message,
        name: err.name,
        request: (err.request) ? {
            path: err.config.url,
            method: err.config.method,
            header: err.request._header,
            data: err.config.data,
        } : undefined,
        response: (err.response) ? {
            headers: err.response.headers,
            status: err.response.status,
            statusText: err.response.statusText,
            data: err.response.data
        } : undefined,
        defaults: (err.config) ? {
            baseURL: err.config.baseURL,
            defaultHeaders: err.config.headers,
            defaultTimeout: err.config.timeout,
        } : undefined
    };
}