<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Zaal-Tecnologia/zaal-nfce-web/master/src/assets/logo_branca_horizontal.jpg?token=AGOFMQSCA7HGC23E67FQFDK7ETLC4" width="400px" />
</h1>

<p align="center">
  <img alt="Made by Henrique Tavares" src="https://img.shields.io/badge/made%20by-Zaal Tecnologia-%20?color=F1574D">
</p>

<p align="center">
  <a href="#gear-setting">⚙ Setting</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">ℹ️ How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#handshake-contribution">🤝 Contribution</a>
</p>

<p align="center">
  Customized commitizen adapter in pt-BR used by Zaal's development team in their projects.
</p>

---

# :gear: Setting

### 01 - It is necessary to have Commitizen installed in your project, so let's install

```bash
yarn add @commitlint/cli -D

# or

npm install --save-dev @commitlint/cli

```

### 02 - Now, install the zaal-cz

```bash
yarn add zaal-cz -D

# or

npm install --save-dev zaal-cz
```

### 03 - To finishing, creating an file with name: `commitlint.config.js` and paste this code there

```javascript
module.exports = {
  extends: ['zaal-cz']
}
```

# :information_source: How To Use

### 01 - Access your `package.json` and create a `config`

```json
"config": {
  "commitizen": {
    "path": "./node_modules/zaal-cz"
  }
}
```

### 02 - Install Husky

```bash
yarn add husky -D

# or

npm install --save-dev husky
```

### 03 - Create the pre-commit hook using the husky

```json
"husky": {
  "hooks": {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
  }
},
```

# :handshake: Contribution

Everyone is welcome to contribute, just create an issue and make your PR that will be a pleasure to receive your help. Thank you! ❤
