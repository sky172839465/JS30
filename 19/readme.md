**CH19 Unreal Webcam Fun**
=============

1. ```navigator.mediaDevices.getUserMedia``` 瀏覽器會詢問是否使用相機，回傳Promise
2. 將資料串流丟給video元素播放必須將media物件轉成他可以讀的格式```window.URL.createObjectURL(localMediaStream)```
3. Canvas context可以將video直接轉成圖片輸出```ctx.drawImage(video element, X asix, Y asix, width, height)```