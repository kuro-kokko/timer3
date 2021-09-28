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


# Github Pages へのリリース手順
rootディレクトリにvue.config.jsファイルを作成する
```
module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',
  }
```

ビルドする(docsフォルダが自動生成される)
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

### 上手く反映されない場合
push後5分程度待っても404が表示される場合は```npm run build```を実行後にpush  
または ```index.html```を更新後pushをすると反映されます。

### Github Pagesの選定理由
Githubにpush後設定を変更するだけで公開が可能、かつ更新もpushを行うだけで手軽に試すことができるため。  
※AWS EC2等でもGithub Actions設定を行えば自動デプロイが可能であるようですが、事前にキー生成やSecret情報の登録が必要になるためこちらほど手軽ではないです  
Github Pagesにはアカウントに紐づくものとリポジトリ単位に紐づくものの2種類があり、今回は後者を採用しています。
