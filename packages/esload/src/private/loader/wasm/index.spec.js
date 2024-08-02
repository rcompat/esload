import test from "esload/test";

export default test("private/loader/wasm/test.wasm", (assert, imported) => {
  const { add } = imported;
  assert(add(0, 1)).equals(1);
});
