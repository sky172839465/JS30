**CH26 Stripe Follow Along Dropdown**
=============

1. ```element.classList.contains()```判斷class有沒有在這個元素裡
2. ```element.getBoundingClientRect()```取得元素定位
3. JavaScript中設定樣式除了```style.styleName```還可以用```style.setProperty()```新增修改樣式，EX:
    ```javascript
        background.style.width = `${coords.width}px`;
        background.style.setProperty('width', `${coords.width}px`);
    ```