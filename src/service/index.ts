import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';
import { RefreshAccessTokenResponse } from 'models/auth/response';
import { getSessionItem, setSessionItem } from 'utils/sessionStorage';

type ServiceConfig = {
  withCredentials?: boolean;
};

const reissueAccessToken = async () => {
  const {
    data: { accessToken },
  } = await axios.post<unknown, AxiosResponse<RefreshAccessTokenResponse>>(
    `${config.authApiHost}/v1/auth/token`,
    undefined,
    {
      withCredentials: true,
    }
  );

  return accessToken;
};

class Service {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private createService = (serviceConfig?: ServiceConfig) => {
    const instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (serviceConfig?.withCredentials) {
      const token = getSessionItem<string>('ACCESS_TOKEN');

      instance.defaults.headers.Authorization = `Bearer ${token}`;
      instance.defaults.withCredentials = true;

      instance.interceptors.response.use(
        (response) => response,
        async (error) => {
          const originalRequest = error.config;

          if (error.response.status === 401) {
            const accessToken = await reissueAccessToken();

            setSessionItem('ACCESS_TOKEN', accessToken);

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            return axios(originalRequest);
          }

          return Promise.reject(error);
        }
      );
    }

    return instance;
  };

  public get = async <Response>(
    url: string,
    serviceConfig: ServiceConfig = {},
    queryConfig?: Omit<AxiosRequestConfig, 'withCredentials'>
  ): Promise<Response> => {
    const { withCredentials } = serviceConfig;

    const instance = this.createService({ withCredentials });

    const { data } = await instance.get<Response>(url, { ...queryConfig });

    return data;
  };

  public post = async <Request, Response>(
    url: string,
    body?: Request,
    serviceConfig: ServiceConfig = {},
    queryConfig?: Omit<AxiosRequestConfig, 'withCredentials'>
  ): Promise<Response> => {
    const { withCredentials } = serviceConfig;

    const instance = this.createService({ withCredentials });

    const { data } = await instance.post<Request, AxiosResponse<Response>>(
      url,
      body,
      { ...queryConfig }
    );

    return data;
  };

  public delete = async <Response>(
    url: string,
    serviceConfig: ServiceConfig = {},
    queryConfig?: Omit<AxiosRequestConfig, 'withCredentials'>
  ): Promise<Response> => {
    const { withCredentials } = serviceConfig;

    const instance = this.createService({ withCredentials });

    const { data } = await instance.delete<Response>(url, { ...queryConfig });

    return data;
  };

  public put = async <Request, Response>(
    url: string,
    body?: Request,
    serviceConfig: ServiceConfig = {},
    queryConfig?: Omit<AxiosRequestConfig, 'withCredentials'>
  ): Promise<Response> => {
    const { withCredentials } = serviceConfig;

    const instance = this.createService({ withCredentials });

    const { data } = await instance.put<Request, AxiosResponse<Response>>(
      url,
      body,
      { ...queryConfig }
    );

    return data;
  };
}

export const ShopService = new Service(config.shopApiHost);

export const AuthService = new Service(config.authApiHost);
