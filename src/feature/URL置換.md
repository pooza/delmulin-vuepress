---
title: URL置換
date: 2021-05-17
categories: 機能
---

投稿本文に書かれたURLについて、以下の置換を行います。

## 短縮URLを元に戻す

- `t.co`等、短縮URLには本来のURLを隠す性質があります。用心深いメンバーはそのURLをリスクあるものと警戒し、開くこと躊躇するでしょう。短縮URLを、短縮前の本来のものに戻します。
- 詳細: [ShortenedURLHandler](https://github.com/pooza/mulukhiya-toot-proxy/wiki/ShortenedURLHandler)

## 日本語を含んだURLを正しいものに置換

- 日本語を含んだURLは、クライアントによっては、クリック/タップしても開くことができない場合があります。同じ意味の日本語を含まない形式に置換すれば、どのクライアントでも開くことができる様になります。
- 詳細: [URLNormalizeHandler](https://github.com/pooza/mulukhiya-toot-proxy/wiki/URLNormalizeHandler)

## HTMLソース内にCanonical指定を含むページでは、そのURLに置換

- 複数のURLで呼び出せて、どのURLでアクセスしても同じ内容になるページがよくあります。この場合、サービス側は、「本来のURLはどれか」を指定している場合があります。
- 詳細: [CanonicalURLHandler](https://github.com/pooza/mulukhiya-toot-proxy/wiki/CanonicalURLHandler)

## Amazonの商品URLを短く

- Amazonの商品URLは、日本語を含んだ非常に長いものになりがちです。そのままでは扱いづらいですが、縮めることが可能です。
- 詳細: [AmazonURLHandler](https://github.com/pooza/mulukhiya-toot-proxy/wiki/AmazonURLHandler)

## iTunes StoreのURLを短く

- iTunes StoreのURLも、同様に縮めることが可能です。
- 詳細: [ItunesURLHandler](https://github.com/pooza/mulukhiya-toot-proxy/wiki/ItunesURLHandler)

