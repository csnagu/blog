---
title: 市販のルータを買ってSoftbank光の月額課金額を減らした
date: "2020-10-17"
tags: ["買った", "journal"]
description: TP-LinkのArcher A10を使ってSoftbank光の月額課金額を減らした話
---

## 概要

Softbank 光で IPv6（IPv6 over IPv4）を利用するためには BB ユニット（ルータ）を月額課金でレンタルする必要がある。  
BB ユニットの無線 LAN 機能を有効にするには更に月額課金が必要となり、長期的に見るとランニングコストが嵩んでくるため、BB ユニットと市販ルータを繋いで月額課金額を減らした。

モチベーション

- 無線 LAN 機能を有効にするための月額課金が悪魔的なため、市販ルータと組み合わせて IPv6 が利用できる状態で月額課金額を減らしたかった
- 市販ルータと BB ユニットを組み合わせた系の記事はすぐにヒットしたけど実際にダウンロード/アップロードの速度比較をしていたサイトがほとんど見当たらなかった

## Softbank 光を堪能するためのオプション料金体系

Softbank 光回線で IPv6 を利用するためには BB ユニットなるルータを 400 円/月で、BB ユニットの Wi-Fi 機能を使えるようにする Wi-Fi マルチパックで 1,000 円/月の課金が必要になる。  
BB ユニットは IPv6 対応のために必要なのは良いとして、Wi-Fi マルチパックって……すごい料金体系だなって思った。他のプロバイダもこんな感じなの？？

通信速度は地域による差が大きいらしいが、自分が住んでいる地域では比較的空いている時間帯の有線接続で下り 1Gbps 出たことがある。有線のときは平均したら 600Mbps くらい。  
無線ではばらつきがさらに激しいけど平均すると大体 180Mbps くらい。  
市販のルータに変更してもこの速度より劣化しないことを祈りつつ、続いてルータの選定へ。

ところで Softbank が使っている「IPv6 IPoE + IPv4」という単語、調べてみてもよくわからなかったけど通信は IPoE で扱っていて、IPv6 でつなげるものは IPv4 over IPv6 で繋いで、IPv6 非対応のサイトは IPv4 でつなぐっていうことなのかな。

【参考】

- [IPv6 高速ハイブリッド IPv6 IPoE + IPv4 - Softbank](https://www.softbank.jp/ybb/hikari/ipv6/)
- [IPoE とは？ | NTT コミュニケーションズ 法人のお客さま](https://www.ntt.com/business/services/network/internet-connect/ocn-business/ftth/know.html)

## TP-Link の Archer A10 を購入

BB ユニットのモデルは `E-WMTA2.3` 。
最新のモデルは 2.4 で MU-MIMO やビームフォーミングに対応しているらしい。下記サイトで詳しくまとめられていた。

- [新型光 BB ユニット「E-WMTA2.4」と従来モデルの違い【11ax("Wi-Fi 6")対応】](https://24wireless.info/softbank-ewmta-24-differences)

なにはともあれ月 1,000 円も払い続けたくないので、ちょうど開催されていた Amazon Prime Day セール会場を覗いてみたら [TP-Link の Archer A10](https://www.tp-link.com/jp/home-networking/wifi-router/archer-a10/) が安くなっていた。  
IPoE 対応、MU-MIMO、ビームフォーミングに対応しており 802.11ac 規格に対応していたので当分困らなさそうだったので購入してみる。

![tp-link Archer A10](https://i.gyazo.com/f65316c1f89a42b8700aac3ed2a042d8.jpg "ビオフェルミンとArcher A10")

ルーター、案外大きくてどこに置くか困る。。。

## BB ユニットとルータを接続

BB ユニットは無線 LAN 機能をオフにして A10 をブリッジモードで運用中。

接続構成  
`ONU --- BB ユニット（WAN） --- BB ユニット（LAN） --- A10（WAN）`

インターネットへは IPv6 で接続できているみたい。  
IPv6 接続の確認 - [https://test-ipv6.com/](https://test-ipv6.com/)

| 試行 | BB ユニット（下り） | BB ユニット（上り） | A10（下り） | A10（上り） |
| ---- | ------------------- | ------------------- | ----------- | ----------- |
| 1    | 160Mbps             | 140Mbsp             | 180Mbps     | 590Mbps     |
| 2    | 310Mbps             | 200Mbsp             | 180Mbps     | 490Mbps     |
| 3    | 200Mbps             | 230Mbsp             | 220Mbps     | 470Mbps     |
| 4    | 280Mbps             | 480Mbsp             | 200Mbps     | 450Mbps     |
| 5    | 180Mbps             | 390Mbsp             | 180Mbps     | 430Mbps     |

下りは 180Mbps 付近で安定しているように見える。  
上りはなぜか下がり続けているが BB ユニットを利用していたときと同じような水準になりそうなのでなにより！

回線速度は向上しなかったものの、速度劣化なしに月額課金額を減らせたので良かった。  
Archer A10 は 6,000 円くらいだったので半年くらい運用したら元が取れそう！

おしまい(¦3[___]
