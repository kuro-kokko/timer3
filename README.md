# timer3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Release for Github Pages
'vue.config.js'ファイルを作成する
```
module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',
  }
```

ビルドする('docs'フォルダが作成される)
```
npm run build
```

Githubにpush
```
git push
```

リポジトリのSettings > Pages > Sourceから以下を選択してSave
```
Branch:公開するブランチ
folder:/docs
```

```https://ユーザー名.github.io/ブランチ名/``` のURLで公開される。