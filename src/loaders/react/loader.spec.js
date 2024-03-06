import { test } from "dp";

export default test("react", ".jsx", (assert, { message }) => {
  assert(message.includes("Cannot find package 'react'")).true();
});
