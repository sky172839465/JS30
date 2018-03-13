**CH25 Event Capture, Propagation, Bubbling and Once**
=============

1. ```click event```如果點擊到的元素其父節點也有同樣的監聽事件則會**一起被觸發**，這叫bubble事件冒泡
2. event監聽觸發function執行時這個scope中的this指的是**監聽的元素**，event.target是**觸發監聽的元素**
3. ```event.stopPropagation()```避免遇到1.的狀況連續觸發監聽事件，這個API可以終止第一個之後的觸發事件
4. ```element.addEventListener()```第三個元素如果是 ```{ capture: true }``` 就會從最外層的元素開始觸發
5. ```element.addEventListener()```第三個元素如果是 ```{ once: true }``` 事件觸發一次就會取消，相當於  ```element.removeEventListener()```
6. 