import Runtime from "./Runtime.js";

export const initialize = async ({ config } = {}) => {
  globalThis.runtime = await Runtime.new(config);
};

export const resolve = async (specifier, context, next) => {
  return next(specifier, context);
};

export const load = (...args) => globalThis.runtime.load(...args);
