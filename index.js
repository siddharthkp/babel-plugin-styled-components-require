'use strict';

exports.__esModule = true;

exports.default = ({types: t}) => {
  return {
    visitor: {
      TaggedTemplateExpression: (path, {file}) => {
        if (path.scope && path.scope.globals && path.scope.globals.styled) file.set('hasStyled', true);
      },
      Program: {
        enter: (path, {file}) => {
          file.set('hasStyled', false);
        },
        exit: ({ node, scope }, { opts, file }) => {
          if (!(file.get('hasStyled') && !scope.hasBinding('styled'))) return;
          const packageName = opts.native
            ? 'styled-components/native'
            : 'styled-components';

          const declaration = t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier('styled'))],
            t.stringLiteral(packageName)
          );

          node.body.unshift(declaration);
        }
      }
    }
  };
};
