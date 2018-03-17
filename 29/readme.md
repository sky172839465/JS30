**CH29 Countdown Clock**
=============

1. ```document.title```可以用來修改頁籤上的網站名稱
2. document物件底下可以直接取得有名稱的form以及form底下的input，EX
    ```html
        <form name="customForm" id="custom">
            <input type="text" name="minutes" placeholder="Enter Minutes">
        </form>        
    ```
    ```javascript
        // get customForm form
        document.customForm
        // get minutes input
        document.customForm.minutes
    ```