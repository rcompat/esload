import loader from "@esload/core/loader";

export default loader("react", ".jsx", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { transform } = await import("esbuild");

    return (await transform(text, { loader: "jsx", jsx: "automatic" })).code;
  });
});
