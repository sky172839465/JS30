**CH30 Whack A Mole Game**
=============

1. ```Math.random()```隨機產生亂數
2. 要保證亂數**沒有和前一次重複**，可以在重覆的時候重新執行同一個function否則return新的亂數
    ```js
        let lastNum;

        function random() {
            const max = 5;
            const num = Math.floor(Math.random() * max);

            if (num === lastNum) {
                console.log('Num is duplicate!!');
                return random();
            }
            lastNum = num;
            return num;
        }
    ```
3. click event 有一個 isTrusted 屬性可以用來判斷是**人點擊**還是透過**JavaScript點擊**的