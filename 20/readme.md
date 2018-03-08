**CH20 Native Speech Recognition**
=============

1. 使用語音功能 ```const recognition = new SpeechRecognition()```
2. 啟用說話途中判斷的結果 ```recognition.interimResults = true```
3. 語音事件 講話途中 ```result``` ，講到一半停下來就會終止 ```end```
4. 啟用語音功能 ```recognition.start()```
5. 語音功能API [https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition][]

[https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition]: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition