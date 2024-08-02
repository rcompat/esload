import loader from "@esload/core/loader";

export default loader("json", ".json", (filter, runtime) => {
  runtime.onload({ filter }, text => `export default ${text}`);
});
