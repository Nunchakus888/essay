---
layout: post
title:  webpack-dev-server-1min速配
date:   2017-05-10
categories: diary
location: ShangHai, China
description: 开始⌛️...
tail: 超过1min就再花1分钟😁
---
---


#### webpack-dev-server速配：
简单粗暴 123...

```
"dev": "NODE_ENV=development webpack-dev-server --open --hot",
```


```
output: {
    publicPath: 'dist',
},
```

```
devServer: {
    contentBase: path.join(__dirname, './html'),
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8999
},
```