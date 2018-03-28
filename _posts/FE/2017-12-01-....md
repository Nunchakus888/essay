```
myInterval(1000, () => console.log(new Date().toLocaleTimeString()))
```


```
function myInterval (interval, cb) {
	setTimeout(() => {
		cb()
		return myInterval(interval, cb)
	}, interval)
}
```