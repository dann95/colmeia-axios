import { AxiosRequestConfig, AxiosResponse } from "axios";

declare class ColmeiaAxiosWrapper {

    constructor(configuration?: AxiosRequestConfig);

    request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    head<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    options<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;

}