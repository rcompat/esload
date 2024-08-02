import loader from "@esload/core/loader";

const encoder = new TextEncoder();

export default loader("wasm", ".wasm", (filter, runtime) => {
  runtime.onload({ filter }, async text => {
    return {
      format: "wasm",
      shortCircuit: true,
      source: encoder.encode(text),
    };
  });
});
