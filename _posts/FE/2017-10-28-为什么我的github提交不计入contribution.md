---
layout: post
title:  为什么我的github提交不计入contributions？
date:   2017-10-29 00:40:00 +0800
categories: diary
location: ShangHai, China
description: 看着一年365天那么多格子都有commit记录，多有动力😄，
tail: 
      

---
---


> 首先我是有记录的习惯的，本来是打算完完整整的建设一个自己的技术博客
，结果写着写着写成了生活随笔😄，五花八门😄。
毕竟，一切都源于生活嘛😄，那就这样好咯。


好一段时间github不记录我的提交记录了，这个很是惆怅，
然后看官方记录规则大概了解到：
本地提交用户需要与github账号用户一致，就是email，

(在项目中查看提交记录可看到你机器设置的git用户名)
```
git log

显示如下：
commit 6f642a246062550cd90cf80d7faa332a5ec23b68 (HEAD -> master, origin/master, origin/HEAD)
Author: XXXXXXX <XXXXXXX@gmail.com>
Date:   Sat Oct 28 22:02:04 2017 +0800
```

然后就改改回来～～
```
git config –global user.name "Neo" 
git config –global user.email "hello.world@gmail.com"

```
更改完后可通过 

```
git config --list 查看
```

其他的几个不会出发记录contribution的要点我们一般不会触及到。
详细🔎可查阅 [Learn how we count contributors](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/)
