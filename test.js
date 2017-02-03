const babel = require('babel-core');
const assert = require('assert');
const styledComponentsPlugin = require('./index').default;

let transform;

describe('babel-plugin-styled-components', () => {
  beforeEach(() => {
    transform = code => babel.transform(code, {
      plugins: [styledComponentsPlugin],
    }).code;
  });

  it('should return transpiled code with required styled-components', () => {
    const transformed = transform(
`const Blue = styled.img\`
  color: blue;
\`;
export default Blue;`
    );

    assert.equal(transformed,
`import styled from "styled-components";
const Blue = styled.img\`
  color: blue;
\`;
export default Blue;`
    );
  });

  it('should return not transpiled code', () => {
    const transformed = transform('console.log("hello world")');

    assert.equal(transformed, 'console.log("hello world");');
  });

  it('should check that plugin does not import styled-components twice', () => {
    const transformed = transform(
`const Blue = styled.img\`
  color: blue;
\`;

const Red = styled.img\`
  color: blue;
\`;
export default { Blue, Red };`
    );

    assert.equal(transformed,
`import styled from "styled-components";
const Blue = styled.img\`
  color: blue;
\`;

const Red = styled.img\`
  color: blue;
\`;
export default { Blue, Red };`
    );
  });

  it('should does not replace users import', () => {
    const transformed = transform(
`import styled from "styled-components";
const Blue = styled.img\`
  color: blue;
\`;
export default Blue;`
    );

    assert.equal(transformed,
`import styled from "styled-components";
const Blue = styled.img\`
  color: blue;
\`;
export default Blue;`
    );
  });
});
