# eslint-plugin-chronobank

> ESLint plugin for the ChronoBank related projects.

## Usage

1. `npm install ChronoBank/eslint-plugin-chronobank-react --save-dev`
2. Create a file named `.eslintrc` in your project:

```js
{
  extends: ['plugin:chronobank-react/recommended']
}
```

3. Add to your `package.json` (you'll probably need to change `src` and `specs` folders to your own):

```js
"scripts": {
  ...
  "lint": "./node_modules/eslint/bin/eslint.js --ext .js,.jsx --fix src specs",
  "lint:test": "./node_modules/eslint/bin/eslint.js --ext .js,.jsx src specs",
  "test": "npm run lint:test && jest --useStderr --forceExit --runInBand",
```

4. Use `npm test` before any commit and in your `travis.yml`:

```js
script:
  ...
  - npm test -- --coverage

after_script:
  - cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
```

## Rules

### Extends

This package extends [eslint:recommended](http://eslint.org/docs/rules/), [plugin:react/recommended](https://github.com/yannickcr/eslint-plugin-react) and [plugin:chronobank/recommended](https://github.com/ChronoBank/eslint-plugin-chronobank)

### Overrides

This package overrides rules:

| Override | Description | Reason  |
|--|--|--|
| `'jsx-quotes': [2, 'prefer-single']` | [link](http://eslint.org/docs/rules/jsx-quotes) | Use single quotes in JSX |

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0)
