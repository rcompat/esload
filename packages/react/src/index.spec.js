import test from "esload/test";

export default test("test.jsx", import.meta.dirname, (assert, { message }) => {
  assert(message.includes("Cannot find package 'react'")).true();
});
