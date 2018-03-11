**CH23 Speech Synthesis**
=============

1. ```SpeechSynthesisUtterance()``` API 可以讓瀏覽器讀取指定字串並念出來
2. 監聽 window 底下的全域物件 speechSynthesis 的```voiceschanged```事件可以取得瀏覽器支援的不同語系發音
    ```javascript
        function populateVoices() {
            const voices = this.getVoices();
            console.log(voices);
        }

        speechSynthesis.addEventListener('voiceschanged', populateVoices);    
    ```
3. event listener 中要帶入當事件發生時執行的 function **不能**直接帶入參數，直接帶入等於呼叫了那個 function，解法有以下幾個
    ```javascript
        <!-- 直接把回傳的function寫在listener的參數裡 -->
        stopButton.addEventListener('click', function() { toggle(false); });
    ```
    ```javascript
        <!-- Javascript bind 可以綁入指定的 function 和預定要回傳的內容，而且**不會直接執行** -->
        stopButton.addEventListener('click', toggle.bind(null, false));
    ```
    ```javascript
        <!-- 和第一種方法一樣但是改成 ES6 的 arrow function -->
        stopButton.addEventListener('click', () => toggle(false));
    ```        
