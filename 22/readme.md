**CH22 Follow Along Links**
=============

1. ```element.getBoundingClientRect()```取得元素的定位資料，EX:
    ```javascript
        {
            bottom:128,
            height:28,
            left:602.265625,
            right:691.40625,
            top:100,
            width:89.140625,
            x:602.265625,
            y:100
        }
    ```
2. ```getBoundingClientRect()```取得的top, left, right, bottom, x, y是**畫面上的相對位置**不是絕對位置，所以要取得真正的位置需要加上滾動的距離，EX:
    ```javascript
        const coords = element.getBoundingClientRect();
        const truePosition = {
            top: coords.top + window.scrollY,
            left: coords.left + window.scrollX
        };
    ```