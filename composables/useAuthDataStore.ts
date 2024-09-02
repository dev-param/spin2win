import { useStorage } from "@vueuse/core";

export default function () {
  return useStorage(
    "auth",
    { token: { access: "", refresh_token: "" } }

    // localStorage,
    // { mergeDefaults: true }
  );
}
