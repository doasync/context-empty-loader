Webpack loader
===================

This loader can exclude/skip/empty modules by context/folder/path they were requested from.
----------

Installation
-------------

```bash
npm install --save-dev context-empty-loader
```

Usage
-------------------

Webpack rule:
```javascript
// Skips all polyfills from specifed paths
{
  test: `${paths.modules}/core-js/`,
  use: {
    loader: 'context-empty-loader',
    options: {
      context: [
        `${paths.modules}/some-module/es/path/`,
        `${paths.modules}/another-module/`
      ]
    }
  },
},
```

Testing function is **startsWith()**
