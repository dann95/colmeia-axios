import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosErrorToJSON } from "./error";

export class ColmeiaAxiosWrapper {

    private instance: AxiosInstance;

    constructor(configuration?: AxiosRequestConfig) {
        this.instance = axios.create(configuration);
    }

    private static safeReThrow(err: AxiosError) {
        throw axiosErrorToJSON(err);
    }

    async request<T> (config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.request<T>(config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.get<T>(url, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.delete<T>(url, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

    async head<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.head<T>(url, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }


    async options<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.options<T>(url, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.post<T>(url, data, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.put<T>(url, data, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

    async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            const response: AxiosResponse<T> = await this.instance.patch<T>(url, data, config);
            return response;
        } catch (e) {
            ColmeiaAxiosWrapper.safeReThrow(e);
        }
    }

}