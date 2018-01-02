---
layout: post
title:  pillow～让我看看你是有多强大
date:   2018-01-02 18:21:00 +0800
categories: diary
location: ShangHai, China
description: 玩。
tail: 枕头？


---
---


### 契子
    
### android adb 配置

* .bash_profile 加入如下配置，但是只在当前会话生效，什么鬼？


```
    export PATH=${PATH}:/Users/nunchakus/tools/android/platform-tools/
    
```

* 后来发现，如果用了zsh插件，需要额外加一步：

```
    cd ~
    vim .zshrc
    
    在
    # User configuration
    下添加：
    
    source ~/.bash_profile
    
    source .zshrc
    
```

* O
