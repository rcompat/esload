import is from "@rcompat/invariant/is";

export default (name, extension, loader) => {
  is(extension).string("`extension` must be a string");
  const filter = new RegExp(`${extension}$`, "u");

  return { name, setup: runtime => loader(filter, runtime) };
};
