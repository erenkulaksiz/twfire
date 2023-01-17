# Twfire

Simpler Tailwind React Components.
This repo holds example NextJS app and the library itself.

### Install package
```bash
npm i twfire
```

### Import twfire
```javascript
import Tw from "twfire";
```

### Use twfire
```javascript
<Tw.e tag="button" bg-red-400 p-2 px-2 onClick={() => alert("hey")}>I'm a button!</Tw.e>
```

### Apps and Packages

- `nextjs`: a [Next.js](https://nextjs.org/) app
- `twfire`: Library

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
cd twfire
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd twfire
npm run dev
```