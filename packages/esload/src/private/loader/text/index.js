import loader from "@esload/core/loader";

export default loader("text", ".txt", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    return `export default ${JSON.stringify(text)}`;
  });
});
