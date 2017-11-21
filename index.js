'use strict';

/* eslint-disable func-names, no-underscore-dangle */

const { getOptions } = require('loader-utils');

module.exports = function (source) {
  let { context } = getOptions(this);

  if (!Array.isArray(context)) {
    context = [context];
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const path of context) {
    if (
      this._module.issuer.resource.startsWith(path)
    ) {
      return '';
    }
  }

  return source;
};
