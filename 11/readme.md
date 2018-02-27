**CH11 Custom HTML5 Video Player**
=============

1. 呼叫元素內建的方法可以當作是物件裡的一個key，```video.play()``` === ```video['play']()```
2. video全螢幕要隱藏html5 video controls需要用CSS  
    ```css
    video::-webkit-media-controls {
        display:none !important;
    }
    ```