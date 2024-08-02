import is from "@rcompat/invariant/is";
import { register } from "node:module";

let loaded = false;

export default () => {
  is(loaded).false("loader already loaded once");

  register("./private/register.js", import.meta.url);

  loaded = true;
};
