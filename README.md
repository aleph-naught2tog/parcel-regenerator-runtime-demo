# regeneratorRuntime fix

Parcel uses Babel by default, which means shenanigans re `regeneratorRuntime` in the polyfill.

To avoid this, you can add to your `package.json` file (like the one in this repo):

```json
  "browserslist": [
    "last 1 Chrome version"
  ]
```

If you're using TypeScript, you don't need to do anything. TypeScript will take care of that syntax for you in TypeScript files.

This was verified to work with:

* Firefox 67.0
* Chrome Version 73.0.3683.103
* Safari Version 12.1

It probably works for older versions too, I just had no way of verifying.
