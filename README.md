# babel-plugin-styled-components-require

Babel plugin that adds styled-components import declaration.

## Example

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

## Usage

* Install `babel-plugin-styled-components-require`.

```
npm install babel-plugin-styled-components-require --save-dev
```

* Add `styled-components-require` into `.babelrc`.

```json
{
  "plugins": [
    "styled-components-require"
  ]
}
```
