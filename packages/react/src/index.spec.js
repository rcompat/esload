import test from "@esload/core/test";

export default test("react", ".jsx", (assert, { message }) => {
  assert(message.includes("Cannot find package 'react'")).true();
});
