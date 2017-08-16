##### webpack-dev-server速配：
简单粗暴 123...
+ + + + +
```
"dev": "NODE_ENV=development webpack-dev-server --open --hot",
```

+ + + + +
```
output: {
    publicPath: 'dist',
},
```
+ + + + +
```
devServer: {
    contentBase: path.join(__dirname, './html'),
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8999
},
```