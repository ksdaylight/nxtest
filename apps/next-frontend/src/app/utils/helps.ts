import { initQueryClient } from '@ts-rest/react-query';
import { appsApi } from '@nxtest/api-contracts';
import axios, { Method, AxiosError, AxiosResponse, isAxiosError } from 'axios';


export const apiClient = initQueryClient(appsApi, {
  baseUrl: '', // 全交给下面的axios配置
  baseHeaders: {
    Authorization: 'key',
  },
  // credentials: 'include',
  jsonQuery: true,
  api: async ({ path, method, headers, body }) => {
    try {
      const result = await axios.request({
        method: method as Method,
        url: `http://127.0.0.1:3101${path}`,
        headers,
        data: body,
      });
      const convertedHeaders = new Headers();
      for (const key in result.headers) {
        convertedHeaders.set(key, result.headers[key] as string);
      }
      return {
        status: result.status,
        body: result.data,
        headers: convertedHeaders,
      };
      // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    } catch (e: Error | AxiosError | unknown) {
      if (isAxiosError(e)) {
        const error = e as AxiosError;
        const response = error?.response as AxiosResponse;
        if (response?.status === 401 || response?.status === 403) {
          // window.location.href = '/auth';
          // return; // 或者
          throw new Error('Unauthorized or Forbidden');
        }
        const convertedHeaders = new Headers();
        for (const key in response?.headers) {
          convertedHeaders.set(key, response?.headers[key] as string);
        }
        return {
          status: response?.status,
          body: response?.data,
          headers: convertedHeaders,
        };
      }
      throw e;
    }
  },
});
