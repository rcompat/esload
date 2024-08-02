import depend from "@esload/core/depend";
import loader from "@esload/core/loader";

export default loader("typescript", ".ts", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    await depend(["esbuild"], "typescript");
    const { transform } = await import("esbuild");

    return (await transform(text, { loader: "ts" })).code;
  });
});
