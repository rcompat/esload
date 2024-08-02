import json from "#loader/json";
import text from "#loader/text";
import wasm from "#loader/wasm";
import file from "@rcompat/fs/file";
import override from "@rcompat/object/override";

const loaders = {
  txt: text,
  json,
  wasm,
};

const fallback = {
  loader: (url, context, next) => next(url, context),
};

const facade_loaded = loaded => typeof loaded === "string"
  ? { format: "module", shortCircuit: true, source: loaded }
  : loaded;

const empty =
  { format: "module", shortCircuit: true, source: "export default {}" };

const try_load = async func => {
  try {
    return await func();
  } catch {
    return empty;
  }
};

const Runtime = class Runtime {
  #config;
  #used = false;
  #loaders = [];

  constructor(config) {
    this.#config = config;
  }

  reuse() {
    this.#used = false;
  }

  #text(url) {
    return this.#config.virtuals[url] ?? file(url).text();
  }

  async #resolve(url) {
    return this.#config.virtuals[url] || file(url).exists();
  }

  onload({ filter }, loader) {
    this.#loaders.push({
      filter,
      loader: async (url, context, next) => {
        return await this.#resolve(url)
          ? facade_loaded(await loader(await this.#text(url)))
          : next(url, context);
      },
    });
  }

  resolve(specifier, context, next) {
    return this.#config.virtuals[specifier]
      ? {
        format: "module",
        importAttributes: {},
        shortCircuit: true,
        url: specifier,
      }
      : next(specifier, context);
  }

  async load(url, context, next) {
    if (this.#config.once && this.#used) {
      return fallback.loader(url, context, next);
    }
    const { loader } = this.#loaders.find(_ => _.filter.test(url)) ?? fallback;
    if (loader !== fallback.loader) {
      this.#used = true;
    }
    return try_load(() => loader(url, context, next));
  }
};

export default {
  async new(config) {
    const $config = override(config, {
      once: false,
      virtuals: {},
      extensions: {},
    });
    const runtime = new Runtime($config);
    await Promise.all(Object.entries(loaders)
      .map(([extension, loader]) => loader(extension).setup(runtime)));

    return runtime;
  },
};
