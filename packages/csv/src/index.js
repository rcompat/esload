import loader from "@esload/core/loader";

export default loader("csv", ".csv", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    const { parse } = await import("csv-parse/sync");

    return `export default ${JSON.stringify(parse(text))}`;
  });
});
