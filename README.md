## @emergentmethods/asknews-typescript-sdk@0.2.35

Typescript SDK for the AskNews API.
This SDK utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Installation

```
npm install @emergentmethods/asknews-typescript-sdk@0.2.35 --save
```

## Usage

```ts
import { AskNewsSDK } from "@emergentmethods/asknews-typescript-sdk";

const ask = new AskNewsSDK({
  clientId: "YOUR-CLIENT-ID",
  clientSecret: "YOUR-CLIENT-SECRET",
  scopes: ["news"],
});

// prompt-optimized string ready to go for any LLM:
const newsContext = (
  await ask.news.searchNews({
    query: "Effect of fed policy on tech sector",
    returnType: "string",
  })
).asString;

console.log(newsContext);
```

And you will have a prompt-optimized string ready to go for any LLM.

Find full details at the [AskNews API documentation](https://docs.asknews.app).

## Support

Join our [Discord](https://discord.gg/2Yw66XXEhY) to see what other people are building, and to get support with your projects.
