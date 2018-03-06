**CH18 Tally String Times with Reduce**
=============

1. arrow function 簡寫
    ```javascript
    <!-- ES5 -->
    ['10', '5'].map(function(str) {
        return parseFloat(str);
    });
    ```
    ```javascript
    <!-- ES6 -->
    ['10', '5'].map(str => parseFloat(str));
    ```
    ```javascript
    <!-- ES6 shorter -->
    ['10', '5'].map(parseFloat);
    ```
