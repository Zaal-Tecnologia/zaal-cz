<h1 align="center">
  <img alt="Zaal" title="Zaal" src="https://raw.githubusercontent.com/Zaal-Tecnologia/zaal-cz/master/src/assets/zaal_logo.jpg" width="400px" />
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/Zaal-Tecnologia/zaal-cz?color=F1574D">
  <img alt="Made by Zaal Tecnologia" src="https://img.shields.io/badge/made%20by-Zaal Tecnologia-%20?color=F1574D">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/Zaal-Tecnologia/zaal-cz?color=F1574D">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Zaal-Tecnologia/zaal-cz?color=F1574D">
  <img alt="GitHub license" src="https://img.shields.io/github/license/Zaal-Tecnologia/zaal-cz?color=F1574D">
</p>

<p align="center">
  <a href="#gear-setting">⚙ Setting</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">ℹ️ How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#handshake-contribution">🤝 Contribution</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">📝 Licence</a>
</p>

<p align="center">
  Customized commitizen adapter in pt-BR used by Zaal's development team in their projects.
</p>

---

# :gear: Setting

### 01 - It is necessary to have `Commitlint` installed in your project, so let's install

```bash
yarn add @commitlint/config-conventional @commitlint/cli -D

# or

npm install --save-dev @commitlint/config-conventional @commitlint/cli


```

### 02 -Install the `Commitizen`

```bash
yarn add commitizen -D

# or

npm install --save-dev commitizen


```

### 03 - Now, creating an file with name: `commitlint.config.js` and paste this code there

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

### 04 - Install `Husky` to automate your commits

```bash
yarn add husky -D

# or

npm install --save-dev husky
```

### 05 - Start commitizen with `zaal-cz` as a messaging convention

```bash
yarn commitizen init zaal-cz --yarn --dev --exact

# or

npx commitizen init zaal-cz --save-dev --save-exact
```

# :information_source: How To Use

### Create the pre-commit hook using the husky

```json
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
  }
},
```

_Now you just type `git commit`, you will see this:_

# :handshake: Contribution

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feat`;
- Commit your changes: `git commit -m '✨ My Feat'`;
- Push to your branch: `git push origin my-feat`.

After the merge of your pull request is done, you can delete your branch.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

---

Developed with ♥ by [Zaal Tecnologia](zaal.com.br)
