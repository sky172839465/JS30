**CH15 LocalStorage and Event Delegation**
=============

1. ```submit event``` 包含的行為比較廣，還多了點擊、按下enter事件
2. 避免submit送出造成頁面重新載入可以用```e.preventDefault()```
3. label元素的for屬性可以讓label和checkbox綁在一起，label被點擊checkbox跟著toggle
    ```html
        <input type="checkbox" id="item1">
        <label for="item1">
    ```
4. checkbox和label綁定後，點擊事件會觸發**兩次**
5. ```element.matches('elementName')```判斷這個元素是不是elementName這個元素，elementName不分大小寫