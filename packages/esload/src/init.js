import is from "@rcompat/invariant/is";
import override from "@rcompat/object/override";
import { register } from "node:module";

let loaded = false;

export default config => {
  if (loaded) {
    throw new Error("loader already loaded once");
  }
  const c = override(config, {
    virtuals: {},
    extensions: {},
  });
  const data = { config: c };
  register("./register.js", import.meta.url, { data });

  loaded = true;

  return {
    virtual(url, text) {
      is(url).string();
      is(text).string();

      config.virtuals[url] = text;
    },

    extension(extension, loader) {
      config.extensions[extension] = loader;
    },
  };
};
