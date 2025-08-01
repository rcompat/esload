import is from "@rcompat/assert/is";
import { register } from "node:module";

let loaded = false;

export default (once = false) => {
  if (loaded && once) {
    return;
  }
  is(loaded).false("loader already loaded once");

  register("./private/register.js", import.meta.url, { data: {} });

  loaded = true;
};
