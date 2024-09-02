import type { UseFetchOptions } from "#app";
import { defu } from "defu";
import { jwtDecode } from "jwt-decode";
// import { isJwtExpired } from "jwt-check-expiration";

export default async function <T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
  SuccessToast: boolean = false,
  callback = (code: String, res: Function) => console.debug(res)
) {
  const SessionData = useAuthDataStore();
  const base_api_url = import.meta.env.VITE_Base_Api_url;
  const defaults: UseFetchOptions<T> = {
    baseURL: base_api_url,
    server: false,
    headers: {
      Authorization: `Bearer ${SessionData.value.token.access}`,
      "Content-Type": "application/json",
    },
  };

  defaults.onRequest = async ({ options }) => {
    const is_access_ex: boolean = isJwtExpired(SessionData.value.token.access);
    const is_refresh_ex: boolean = isJwtExpired(
      SessionData.value.token.refresh_token
    );
    if (is_access_ex && !is_refresh_ex) {
      const { status, error, execute } = await useFetch(
        "/user/refresh-token/",
        {
          baseURL: base_api_url,
          method: "POST",
          watch: false,
          body: {
            token: SessionData.value.token.refresh_token,
          },
          onResponse({ response }) {
            if (response.status == 200) {
              SessionData.value.token = response._data;
            }
          },
        }
      );
      if (status.value === "idle") {
        await execute();
      }

      if (status.value === "error") {
        console.log(error.value);
        navigateTo("/auth/login/");
        throw Error("Auth Token Updating Failed");
      }
      if (status.value === "success") {
        options.headers = {
          Authorization: `Bearer ${SessionData.value.token.access}`,
          accept: "application/json",
        };
      }
    } else if (is_access_ex && is_refresh_ex) {
      console.log("session expired");
      navigateTo("/auth/login/");
    }
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}
function isJwtExpired(token: string) {
  if (typeof token !== "string" || !token)
    throw new Error("Invalid token provided");

  let isJwtExpired: boolean = false;
  const exp = jwtDecode(token).exp ?? 0;
  const currentTime = new Date().getTime() / 1000;

  if (currentTime > exp) isJwtExpired = true;

  return isJwtExpired;
}
