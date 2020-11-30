# :two_men_holding_hands: nacomer_react

![AWS S3 deployment](https://github.com/nacomer/nacomer_react/workflows/AWS%20S3%20deployment/badge.svg)

This was created during my time as a student at [Code Chrysalis](https://codechrysalis.io/)

このモジュールは [nacomer](https://github.com/nacomer) のフロントエンドを提供します。

[nacomer](https://github.com/nacomer) を利用するためには、 [nacomer_express](https://github.com/nacomer/nacomer_express) と合わせてご利用ください。

## Concept

自分らしくいられる( _NAtural_ )、新しい( _newCOMER_ )趣味を見つけよう => 仲間( _NACOMER_ )を作ろう

## Description

- 自己紹介で趣味が無くて、いつも困る。
- 友人と遊びたいけど、飲むだけに飽きた。
- 自宅にいる時間が長くなったので、新しい趣味を見つけたい。
- 趣味を通じて、新しい友人が欲しい。

そんなあなたに打ってつけのアプリが*NACOMER*  
新しい趣味を見つけるもよし！自分の好きなことで新しい出会いを求めるもよし！

## Requirement

### "nacomer_react" の動作確認 Nodejs のバージョン

- v12.19
- v14.15

## Install

### モジュールの取得

```shell
git clone https://github.com/nacomer/nacomer_react.git
```

### 初期設定

- `.env` の作成
  - `.env` をリポジトリルートに作成する。

```
REACT_APP_URL=http://localhost:5000 ※nacomer_expressの設定に従い記載
```

- モジュールインストール（依存パッケージのインストール）

```
$ yarn
```

### サービス起動

```
$ yarn start
```

## :envelope: Contribution

1. Fork it (https://github.com/nacomer/nacomer_express)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## :free: License

under the MIT license

## :man: Author

[nacomer](https://github.com/nacomer)

## :warning: Note

- `.env` ファイルは各環境に合わせて作成してください。
- 現在 β 版のため仕様が変更される場合があります。
