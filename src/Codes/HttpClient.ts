
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';


export abstract class HttpClient {
    protected readonly axios: AxiosInstance;

    protected constructor(baseURL: string|undefined) {
        if(baseURL==undefined)baseURL=axios.defaults.baseURL;
        if(baseURL==undefined)console.warn('No baseURL defined for HttpClient and Axios.');
        //more info about AxiosRequestConfig here: https://github.com/axios/axios
        this.axios = axios.create({
            baseURL,
        });
        this.setupAxiosInterceptors();
    }

    private setupAxiosInterceptors() {
        this.axios.interceptors.response.use(
            this.handleAxiosResponse,
            this.handleAxiosError,
        );

        this.axios.interceptors.request.use(
            this.handleAxiosRequest,
            this.handleAxiosError,
        );
    };

    private handleAxiosRequest(config: AxiosRequestConfig) {
        //optional=> config.headers['Authorization'] = 'Bearer ...';
        return config;
    };

    private handleAxiosResponse({ data }: AxiosResponse){
        return data;
    }

    protected handleAxiosError(error: any){
        console.log('(HttpClient)error:',error);
        return Promise.reject(error);
    };
}
