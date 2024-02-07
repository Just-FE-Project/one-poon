// import axios, { AxiosInstance, AxiosResponse } from "axios";

// export enum HttpMethod {
//   get = "get",
//   post = "post",
//   put = "put",
//   delete = "delete",
// }

// export type APIErrorHandlingOptions = {
//   shouldReturnRawError?: boolean;
// };

// type APIConfig = {
//   errorHandlingOptions?: APIErrorHandlingOptions;
//   extraHeaders?: Map<string, string>;
// };

// export const END_POINT = getAPIEndPoint();

// class API {
//   private readonly axiosInstance: AxiosInstance;

//   private accessToken: string | null = null;

//   constructor() {
//     this.axiosInstance = createApiClient();
//   }

//   public async get<R>(url: string, config?: APIConfig): Promise<R> {
//     return await this.request({
//       method: HttpMethod.get,
//       url,
//       config,
//     });
//   }

//   public async post<R, Payload>(url: string, data?: Payload, config?: APIConfig): Promise<R> {
//     return await this.request({
//       method: HttpMethod.post,
//       url,
//       reqData: data,
//       config,
//     });
//   }

//   public async put<R, Payload>(url: string, data?: Payload, config?: APIConfig): Promise<R> {
//     return await this.request({
//       method: HttpMethod.put,
//       url,
//       reqData: data,
//       config,
//     });
//   }

//   public async delete<R>(url: string, config?: APIConfig): Promise<R> {
//     return await this.request({
//       method: HttpMethod.delete,
//       url,
//       config,
//     });
//   }

//   private async request<R, Payload>(params: { method: HttpMethod; url: string; reqData?: Payload; config?: APIConfig }): Promise<R> {
//     const { method, url, reqData, config } = params;

//     // const accessToken = this.accessToken ?? getCookie("accessToken") ?? null;

//     // const headers: any = {
//     //   deviceCode: this.deviceType,
//     //   Authorization: `Bearer ${accessToken}`,
//     // };

//     // if (config?.extraHeaders !== undefined && config?.extraHeaders !== null) {
//     //   const extraHeaders = Array.from(config.extraHeaders.entries());
//     //   extraHeaders.forEach(([key, value]) => {
//     //     headers[key] = value;
//     //   });
//     // }

//     try {
//       let axiosResponse: AxiosResponse;

//       switch (method) {
//         case HttpMethod.get:
//           axiosResponse = await this.axiosInstance.get(url, { headers });
//           break;

//         case HttpMethod.post:
//           axiosResponse = await this.axiosInstance.post(url, reqData, { headers });
//           break;

//         case HttpMethod.put:
//           axiosResponse = await this.axiosInstance.put(url, reqData, { headers });
//           break;

//         case HttpMethod.delete:
//           axiosResponse = await this.axiosInstance.delete(url, { headers });
//           break;
//       }

//       printInDevMode("👍     response - " + axiosResponse.status);

//       return axiosResponse.data;
//     } catch (error: any) {
//       const isTokenExpired = error.response?.status === 401 && error.response.data?.code === "JWT_EXPIRED";
//       const isTimeout = error.code === "ECONNABORTED" && error.message.includes("timeout");

//       if (isTimeout) {
//         throw Error("일정 시간이 초과되었습니다. 다시 시도해주세요.");
//       }

//       if (isTokenExpired) {
//         // 토큰 재발급 후 직전 요청 재시도
//         await this.refreshAccessToken();
//         return this.request(params);
//       }

//       if (error.response?.data?.code === "BLACK_LIST_USER" || config?.errorHandlingOptions?.shouldReturnRawError) {
//         throw error;
//       }

//       throw this.processApiError(error);
//     }
//   }

//   processApiError(error: any) {
//     const { response } = error;

//     if (response !== undefined && response !== null) {
//       const { status, data } = response;
//       if (status !== undefined && status !== null && data !== null && data !== undefined) {
//         if (data.message) {
//           if (process.env.NODE_ENV === "development") {
//             return Error(`${status} - ${data.message}${data.code ? ` (code: ${data.code})` : ""}`);
//           } else {
//             // 프로덕션에서는 스테이터스 코드를 숨긴다.
//             return Error(data.message);
//           }
//         } else {
//           return Error(`${status} - ${JSON.stringify(data)}`);
//         }
//       }
//     }

//     return error;
//   }

//   // 서버 사이드에서 호출하면 에러 발생함.
//   private async checkTokenExpiration() {
//     const accessToken = this.accessToken ?? getCookie("accessToken") ?? null;

//     if (accessToken === null) {
//       return;
//     }

//     const tokenStatus = getJwtTokenStatus(accessToken);

//     switch (tokenStatus) {
//       case JwtTokenStatus.EXPIRED:
//       case JwtTokenStatus.EXPIRED_IN_60_SECONDS:
//         await this.refreshAccessToken();
//         break;

//       case JwtTokenStatus.USABLE:
//         break;
//     }
//   }

//   private async refreshAccessToken() {
//     const refreshToken = getCookie("refreshToken");

//     let newAccessToken = "";

//     if (refreshToken === null) {
//       // guest token
//       printInDevMode("👉     Refreshing guest token...");
//       const guestTokenResponse: any = await this.axiosInstance.get("/members/auth/guest");
//       newAccessToken = guestTokenResponse.data.accessToken;
//     } else {
//       // member token
//       printInDevMode("👉     Refreshing member token...");
//       const refreshResponse: any = await this.axiosInstance.get(`/members/auth/refresh?refresh-token=${refreshToken}`);
//       newAccessToken = refreshResponse.data.loginToken.accessToken;
//     }
//     setCookie("accessToken", newAccessToken);
//   }
// }

// function printInDevMode(...args: string[]) {
//   if (process.env.NODE_ENV === "development") {
//     console.log(...args);
//   }
// }

// const _inst = new API();
// export default _inst;

// function getAPIEndPoint(): string {
//   const apiEndPoint = getConfig()?.publicRuntimeConfig?.API_ENDPOINT;

//   if (apiEndPoint === null || apiEndPoint === undefined) {
//     throw Error("API_ENDPOINT environment variable is not set");
//   }

//   return apiEndPoint;
// }

// export function createApiClient() {
//   const siteName = getSiteName();
//   const prefix = siteName === "discovery" ? "DXM" : "MBM";
//   const baseURL = `${END_POINT}/${prefix}/KOR`;

//   return axios.create({
//     baseURL,
//     timeout: 10000,
//     headers: {
//       Accept: "application/json;charset=UTF-8",
//     },
//   });
// }
