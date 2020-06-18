## lfn :elephant:

#### Like an `h` function but constructs real DOM trees

Small (373b) helper function to make working with HTML in JS a little easier.

#### Usage:

```js
l(tagname, [props [, children]]);
```

#### Examples:

```js
import { l } from "lfn.js";

// only tagname
const div = l("div");

// tag and children
const heading = l("h1", "hello", " world");

// tag and props
const input = l("input", { name: "name" });

// tag, props and children
const buttons = l("div", { style: "display: flex; " } l("button", { id: "btn_one" }), l("button", { id: "btn_two" }));
```
