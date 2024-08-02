# esload

JavaScript module loader

## Why?

* Import a variety of configuration formats (YAML, TOML, JSON5)
* Import frontend framework formats for server-side templating (JSX, Vue,
Svelte, Solid, Handlebars, Marko)
* Import transpiled languages (TypeScript, CoffeeScript)
* Other stuff (`.txt` files as string, `.wasm` modules)

## Install

`npm install esload`

esload comes bundled with the dependency-free loaders for `.txt`, `.json` and
`.wasm`. For additional loaders, consult the [loader overview](#loaders) on
which packages to install.

## Use

### In the terminal

If you run from the terminal, you get both static and dynamic imports.

`node --import=esload app.js`

```js
import config from "./config.json";

// or (await import("./config.json")).default
```

### Programmatically

If used programmatically, imports coming after `esload()` must be dynamic
(`import()`).

```js
import register from "esload/register";

register();

const config = (await import("./config.json")).default;
```

### Configure

If esload detects an `esload.config.js` file in the package root, it will load
it automatically.

### esload.config.js

```js
import yaml from "@esload/yaml";

export default {
  loaders: [yaml],
  virtuals: {
    "/config.yaml": 'foo: "bar"',
  },
};
```

#### loaders

Array property for additional loaders.

```js
import yaml from "@esload/yaml";

export default {
  loaders: [yaml],
};
```

#### virtuals

Object property in the form of `{ [path]: code }` to load from memory instead
of the filesystem. Memory paths have precedence over filesystem paths.

```js
export default {
  virtuals: {
    // even if `/config.json` exists, it won't be loaded from disk
    "/config.json": '{ "foo": "bar" }',
  },
};
```


## Loaders

|Name        |Package            |Dependencies                       |
|------------|-------------------|-----------------------------------|
|text        |esload             |-                                  |
|json        |esload             |-                                  |
|wasm        |esload             |-                                  |
|csv         |@esload/csv        |`csv-parse`                        |
|json5       |@esload/json5      |`json5`                            |
|toml        |@esload/toml       |`toml`                             |
|xml         |@esload/xml        |`xml2js`                           |
|yaml        |@esload/yaml       |`yaml`                             |
|react       |@esload/react      |`esbuild`                          |
|vue         |@esload/vue        |`vue`                              |
|svelte      |@esload/svelte     |`svelte`                           |
|solid       |@esload/solid      |`babel-present-solid` `@babel/core`|
|handlebars  |@esload/handlebars |`handlebars`                       |
|marko       |@esload/marko      |`marko`                            |
|typescript  |@esload/typescript |`esbuild`                          |
|coffeescript|@esload/coffescript|`coffeescript`                     |

## License

MIT

## Contributing

By contributing to esload, you agree that your contributions will be licensed
under its MIT license.
