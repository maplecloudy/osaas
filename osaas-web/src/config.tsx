import {extend, ExtendOptionsInit, ResponseError} from 'umi-request';

import {sessionManager} from './utils/sessionManager';
import {errorHandler} from './utils/errorResponseHandler';

const skipTokenUrl = [
  '/users/signup',
  '/users/signin',
  '/users/signin/github',
  '/users/signin/mobile',
  '/users/email',
  '/users/sms',
];

const authHeaderInterceptor = (url: string, options: any) => {
  const token = sessionManager.getAccessToken();
  let authHeader = {...options.header, Accept: 'application/json'};
  if (token && !skipTokenUrl.includes(url)) {
    authHeader['Authorization'] = 'Bearer ' + token + '';
  }
  return {
    url: `/api${url}`,
    options: {
      ...options,
      interceptors: true,
      headers: authHeader,
    },
  };
};

const authResponseInterceptor: NonNullable<ExtendOptionsInit['responseInterceptors']>[0] = async (response: Response, options: any) => {
  if (response.status != 200) {
    if (response.status === 401) {
      sessionManager.clearAuth();
      if (!location.href.includes('session')) {
        location.href = '/session';
      }
    }
    // todo other error stats code
    return response;
  } else {
    return response;
  }
};

export const requestConfig: ExtendOptionsInit = {
  errorHandler: async (error: ResponseError) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      throw error;
    } else {
      await errorHandler(error);
    }
  },
};

export const request = extend(requestConfig)
request.interceptors.request.use(authHeaderInterceptor);
request.interceptors.response.use(authResponseInterceptor);
