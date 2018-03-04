**CH16 CSS Text Shadow Mouse Move Effect**
=============

1. ES6 解構
    ```javascript
        <!-- ES5 -->
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        <!-- ES6 -->
        const { offsetWidth: width, offsetHeight: height } = element;
    ```
2. ```element.offsetParent```會找到元素的上層節點(body)，如果突中遇到有```position:relative```的元素則會回傳那個元素，[Example][]
    ```html
        <div class="first">
            <div class="second"></div>
        </div>
        <div class="third" style="position:relative">
            <div class="fourth"></div>        
        </div>
    ```
    ```javascript
        const second = document.querySelector('.second');
        const fourth = document.querySelector('.fourth');
        <!-- body element -->
        console.log(second.offsetParent);
        <!-- third div element -->
        console.log(fourth.offsetParent);
    ```
3. ```textShadow``` args[0]:X軸偏移、args[1]:Y軸偏移、args[2]:blur模糊、args[3]:文字顏色



[Example]:https://jsfiddle.net/Hsunight/kmgg62bc/