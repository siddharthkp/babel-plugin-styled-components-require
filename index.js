export default function ({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression(path, { file }) {
        if (path && path.scope && path.scope.globals && path.scope.globals.styled) file.set('hasStyled', true);
      },
      Program: {
        enter(path, { file }) {
          file.set('hasStyled', false);
        },

        exit({ node, scope }, { file }) {
          if (!(file.get('hasStyled') && !scope.hasBinding('styled'))) {
            return;
          }

          const styledImportDeclaration = t.importDeclaration([
            t.importDefaultSpecifier(t.identifier('styled')),
          ], t.stringLiteral('styled-components'));

          node.body.unshift(styledImportDeclaration);
        },
      },
    },
  };
}
