**CH17 Sorting Band Names without articles**
=============

1. 產生li元素並加入ul裡面簡化並增加可讀性的用法
    ```javascript
    <!-- 可讀性較差 -->
    sortBandList.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        $bands.appendChild(li);
    });    
    ```

    ```javascript
    <!-- 可讀性較高且簡單 -->
    $bands.innerHTML = sortBandList.map(band => `<li>${band}</li>`).join('');
    ```    
