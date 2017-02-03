### babel-plugin-styled-components-require
[![Build
Status](https://api.travis-ci.org/siddharthkp/babel-plugin-styled-components-require.svg?branch=master)](https://travis-ci.org/siddharthkp/babel-plugin-styled-components-require)
[![npm](https://img.shields.io/npm/v/babel-plugin-styled-components-require.svg?maxAge=3600)](https://www.npmjs.com/package/babel-plugin-styled-components-require)

&nbsp;

Babel plugin that adds styled-components import declaration.

&nbsp;

#### Example

Your `component.js` that contains this code:

```js
const Card = styled.div`
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 2px;
  padding: 10px;
`;
export default Card;
```

will be transpiled to:

```js
import styled from 'styled-components';

const Card = styled.div`
  background: #FFF;
  border: 1px solid #DDD;
  border-radius: 2px;
  padding: 10px;
`;
export default Card;
```

&nbsp;

#### Usage

`npm install babel-plugin-styled-components-require --save-dev`

Add `styled-components-require` into `.babelrc`

```json
{
  "plugins": [
    "styled-components-require"
  ]
}
```

&nbsp;

#### You like?

:star: this repo

&nbsp;

#### License

MIT © [siddharthkp](https://github.com/siddharthkp)
