import loader from "@esload/core/loader";

export default loader("xml", ".xml", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { parseStringPromise } = await import("xml2js");

    return `export default ${JSON.stringify(await parseStringPromise(text))}`;
  });
});
