import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseServerURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseServerURL,
            timeout: 5000, // Set your desired timeout value
        });
    }

    async request<T>(method: Method, endpointPath: string, data?: any): Promise<T> {
        const response: AxiosResponse<T> = await this.axiosInstance.request({
            method,
            url: endpointPath,
            data,
        });
        return response.data;
    }

    async get<T>(endpointPath: string): Promise<T> {
        return this.request<T>('GET', endpointPath);
    }

    async post<T>(endpointPath: string, data: any): Promise<T> {
        return this.request<T>('POST', endpointPath, data);
    }

    async put<T>(endpointPath: string, data: any): Promise<T> {
        return this.request<T>('PUT', endpointPath, data);
    }

    async patch<T>(endpointPath: string, data: any): Promise<T> {
        return this.request<T>('PATCH', endpointPath, data);
    }

    async delete<T>(endpointPath: string): Promise<T> {
        return this.request<T>('DELETE', endpointPath);
    }
}

export default ApiService;
