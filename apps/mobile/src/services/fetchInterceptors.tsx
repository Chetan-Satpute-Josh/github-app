export type RequestInterceptor = (
  input: RequestInfo,
  init?: RequestInit
) => void;
export type ResponseInterceptor = (
  response: Response,
  input: RequestInfo,
  init?: RequestInit
) => void;

let requestInterceptors: RequestInterceptor[] = [];
let responseInterceptors: ResponseInterceptor[] = [];

const nativeFetch = globalThis.fetch;

export function setupFetchInterceptors() {
  if (globalThis.fetch !== nativeFetch) {
    // Fetch is already intercepted — skip setup.
    return;
  }

  globalThis.fetch = async (
    input: RequestInfo,
    init?: RequestInit
  ): Promise<Response> => {
    // call request interceptors
    requestInterceptors.forEach((interceptor) => interceptor(input, init));

    const response = await nativeFetch(input, init);

    // call response interceptors
    responseInterceptors.forEach((interceptor) =>
      interceptor(response, input, init)
    );

    return response;
  };

  // Default interceptors
  addRequestInterceptor(logRequestInterceptor);
  addResponseInterceptor(logResponseInterceptor);
}

export function resetFetchInterceptors() {
  globalThis.fetch = nativeFetch;

  requestInterceptors = [];
  responseInterceptors = [];
}

export function addRequestInterceptor(interceptor: RequestInterceptor) {
  requestInterceptors.push(interceptor);
}

export function removeRequestInterceptor(interceptor: RequestInterceptor) {
  requestInterceptors = requestInterceptors.filter(
    (reqInterceptor) => reqInterceptor !== interceptor
  );
}

export function addResponseInterceptor(interceptor: ResponseInterceptor) {
  responseInterceptors.push(interceptor);
}

export function removeResponseInterceptor(interceptor: ResponseInterceptor) {
  responseInterceptors = responseInterceptors.filter(
    (reqInterceptor) => reqInterceptor !== interceptor
  );
}

export const logRequestInterceptor: RequestInterceptor = (input, init) => {
  const url = typeof input === "string" ? input : input.url;

  console.groupCollapsed(`Request:\t[${init?.method}]\t\t${url}`);
  console.info("Headers:\n", init?.headers);
  console.info("Body:\n", init?.body);
  console.groupEnd();
};

export const logResponseInterceptor: ResponseInterceptor = async (
  response,
  _input,
  init
) => {
  const clonedResponse = response.clone();
  const contentType = clonedResponse.headers.get("content-type") || "";

  let body: unknown;

  try {
    if (contentType.includes("application/json")) {
      body = await clonedResponse.json();
    } else {
      body = await clonedResponse.text();
    }
  } catch (error) {
    console.error("[Unable to parse body]", error);
  }
  console.groupCollapsed(
    `Response:\t[${init?.method} ${clonedResponse.status}]\t${clonedResponse.url}`
  );
  console.info("Status:\t", clonedResponse.status, clonedResponse.statusText);
  console.info("Headers:\n", clonedResponse.headers);
  console.info("Body:\n", body);
  console.groupEnd();
};
