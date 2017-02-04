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

  it('add import statement if `styled.*` is present', () => {
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

  it('do not add to already transpiled code', () => {
    const transformed = transform('<div class="u3nf">hi</div>');

    assert.equal(transformed, '<div class="u3nf">hi</div>');
  });

  it('do not add import styled-components twice', () => {
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

  it('do not add if it already imported', () => {
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
