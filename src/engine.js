'format cjs';

import wrap from 'word-wrap';
import map from 'lodash.map';
import longest from 'longest';
import rightPad from 'right-pad';

var filter = array => {
  return array.filter(function (x) {
    return x;
  });
};

module.exports = options => {
  const types = options.types;

  const length = longest(Object.keys(types)).length + 1;
  const choices = map(types, (type, key) => {
    return {
      name: rightPad(key + ':', length) + ' ' + type.description,
      value: key,
    };
  });

  return {
    prompter: (cz, commit) => {
      console.log(
        '\nA linha 1 pode conter no máximo 100 caracteres. Todas as outras linhas serão recortadas após 100 caracters.\n',
      );

      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message:
            'Fala Dev, selecione o tipo de mudança que está sendo feita no commit:',
          choices: choices,
        },
        {
          type: 'input',
          name: 'scope',
          message:
            'Indique o escopo dessa mudança ($localização, $browser, $compilação, etc...):\n',
        },
        {
          type: 'input',
          name: 'subject',
          message: 'Escreva uma descrição pequena e suscinta das mudanças:\n',
        },
        {
          type: 'input',
          name: 'body',
          message: 'Escreva uma descrição mais completa das mudanças:\n',
        },
        {
          type: 'input',
          name: 'breaking',
          message:
            'Liste se houver mudanças que podem quebrar versões anteriores:\n',
        },
        {
          type: 'input',
          name: 'issues',
          message: 'Liste os issues resolvidos por essa mudança:\n',
        },
      ]).then(answers => {
        const maxLineWidth = 100;

        const wrapOptions = {
          trim: true,
          newline: '\n',
          indent: '',
          width: maxLineWidth,
        };

        let scope = answers.scope.trim();
        scope = scope ? '(' + answers.scope.trim() + ')' : '';

        const head = (
          answers.type +
          scope +
          ': ' +
          answers.subject.trim()
        ).slice(0, maxLineWidth);

        const body = wrap(answers.body, wrapOptions);

        let breaking = answers.breaking.trim();
        breaking = breaking
          ? 'BREAKING CHANGE: ' + breaking.replace(/^BREAKING CHANGE: /, '')
          : '';
        breaking = wrap(breaking, wrapOptions);

        const issues = wrap(answers.issues, wrapOptions);

        const footer = filter([breaking, issues]).join('\n\n');

        commit(head + '\n\n' + body + '\n\n' + footer);
      });
    },
  };
};
