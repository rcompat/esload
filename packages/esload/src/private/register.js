import Runtime from "./Runtime.js";

export const initialize = async () => {
   globalThis.runtime = await Runtime.new();
};

export const resolve = (specifier, context, next) =>
  globalThis.runtime.resolve(specifier, context, next);

export const load = (...args) => globalThis.runtime.load(...args);
