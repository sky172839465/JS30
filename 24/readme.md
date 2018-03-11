**CH24 Sticky Nav**
=============

1. ```element.offsetTop```元素距離**頁面頂部**距離
2. ```window.scrollY```**頁面往下**滾動距離
3. CSS ``position: fixed`` 會造成原先占住的空間消失掉導致其他內容網上提升，解決方法是在原先位置產生一個透明的空間把他占住，EX:
    ```javascript
        document.body.style.paddingTop = element.offsetHeight + 'px';
    ```
4. ```element.offsetHeight```元素的高度
5. CSS `transition` 執行寬度改變動畫不能從 ```max-width: 0;``` 變成 ```max-width: auto;``` 必須給一個數值才可以 EX: ```max-width: 500px;```
6. CSS ```transform: scale(1);``` 改變內容大小的比例