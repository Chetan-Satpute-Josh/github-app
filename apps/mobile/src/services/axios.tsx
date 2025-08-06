import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';

/**
 * Configured axios instance with automatic request/response logging
 * 
 * Features:
 * - Automatic logging of all requests and responses
 * - GitHub API base URL configured
 * - Proper error handling and logging
 * - Request/response interceptors for debugging
 * 
 * Usage:
 * ```typescript
 * import axiosInstance from '#services/axios';
 * 
 * // Make a GET request
 * const response = await axiosInstance.get('/user');
 * 
 * // Make a POST request with data
 * const response = await axiosInstance.post('/repos', { name: 'my-repo' });
 * 
 * // Make a request with custom config
 * const response = await axiosInstance.request({
 *   method: 'GET',
 *   url: '/user/repos',
 *   headers: { 'Authorization': 'token YOUR_TOKEN' }
 * });
 * ```
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json',
  },
});

/**
 * Request interceptor that logs all outgoing requests
 * Logs: method, URL, headers, and body data
 */
const logRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const { method, url, headers, data } = config;
  
  console.groupCollapsed(`Request:\t[${method?.toUpperCase()}]\t\t${url}`);
  console.info('Headers:\n', headers);
  console.info('Body:\n', data);
  console.groupEnd();
  
  return config;
};

/**
 * Response interceptor that logs all successful responses
 * Logs: status, statusText, headers, and response data
 */
const logResponseInterceptor = (response: AxiosResponse) => {
  const { status, statusText, config, data, headers } = response;
  const { method, url } = config;
  
  console.groupCollapsed(
    `Response:\t[${method?.toUpperCase()} ${status}]\t${url}`
  );
  console.info('Status:\t', status, statusText);
  console.info('Headers:\n', headers);
  console.info('Body:\n', data);
  console.groupEnd();
  
  return response;
};

/**
 * Error interceptor that logs all errors
 * Handles different types of errors:
 * - Response errors (server responded with error status)
 * - Request errors (no response received)
 * - Setup errors (error in request configuration)
 */
const logErrorInterceptor = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { status, statusText, config, data, headers } = error.response;
    const { method, url } = config;
    
    console.groupCollapsed(
      `Error Response:\t[${method?.toUpperCase()} ${status}]\t${url}`
    );
    console.error('Status:\t', status, statusText);
    console.error('Headers:\n', headers);
    console.error('Body:\n', data);
    console.groupEnd();
  } else if (error.request) {
    // The request was made but no response was received
    const { method, url } = error.config || {};
    
    console.groupCollapsed(
      `Error Request:\t[${method?.toUpperCase()}]\t\t${url}`
    );
    console.error('No response received');
    console.error('Request:\n', error.request);
    console.groupEnd();
  } else {
    // Something happened in setting up the request that triggered an Error
    console.groupCollapsed('Error Setup');
    console.error('Error message:', error.message);
    console.groupEnd();
  }
  
  return Promise.reject(error);
};

// Add interceptors to the axios instance
axiosInstance.interceptors.request.use(logRequestInterceptor);
axiosInstance.interceptors.response.use(logResponseInterceptor, logErrorInterceptor);

// Export the configured axios instance
export default axiosInstance;

// Export types for convenience
export type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError };

/**
 * Utility function to add a custom request interceptor
 * @param onFulfilled - Function to handle successful requests
 * @param onRejected - Function to handle request errors
 * @returns Interceptor ID for removal
 */
export const addRequestInterceptor = (
  onFulfilled?: (value: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>,
  onRejected?: (error: any) => any
) => {
  return axiosInstance.interceptors.request.use(onFulfilled, onRejected);
};

/**
 * Utility function to add a custom response interceptor
 * @param onFulfilled - Function to handle successful responses
 * @param onRejected - Function to handle response errors
 * @returns Interceptor ID for removal
 */
export const addResponseInterceptor = (
  onFulfilled?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>,
  onRejected?: (error: any) => any
) => {
  return axiosInstance.interceptors.response.use(onFulfilled, onRejected);
};

/**
 * Utility function to remove a request interceptor
 * @param id - Interceptor ID returned from addRequestInterceptor
 */
export const removeRequestInterceptor = (id: number) => {
  axiosInstance.interceptors.request.eject(id);
};

/**
 * Utility function to remove a response interceptor
 * @param id - Interceptor ID returned from addResponseInterceptor
 */
export const removeResponseInterceptor = (id: number) => {
  axiosInstance.interceptors.response.eject(id);
};

// Export the logging interceptors for potential reuse
export { logRequestInterceptor, logResponseInterceptor, logErrorInterceptor }; 