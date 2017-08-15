 1. 文本不换行，超出显示`...`
-----------
```css
display: inline-block;
white-space: nowrap;
max-width: 49%;
overflow: hidden;
text-overflow: ellipsis;

```
对标签加title属性，value为显示文本，pc端鼠标hover即可显示全部文本。`移动端？TODO...`

2. 弹窗？加遮罩？
-------------
```css
.big-image-container {
    .image-overlayer {
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: gainsboro;
        zoom: 1;
        position: fixed;
        z-index: 100;
    }
    .big-image-container {
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 2px;
        border: 1px solid #d8d8d8;
        background-color: #fff;
        z-index: 101;
        width: auto;
        max-width: 600px;
        height: auto;
        max-height: 90vh;
        overflow-y: scroll;
    }
}
```