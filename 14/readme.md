**CH14 Object and Arrays - Reference VS Copy**
=============

1. number, string, boolean 變數A賦予變數B的時候是A複製值B所以A修改後B不會因為參照跟著修改
2. 陣列A賦予陣列B後，```B[index]```改變因為不是直接修改陣列B，所以會因為參照```A[index]```也跟著改變
3. 複製陣列可以用```Array.slice()```，不帶值進去會回傳完整陣列而不是參考
4. 複製陣列可以用```[].concat(Array)```，將Array陣列合併到空陣列並回傳
5. 複製陣列可以用```Array.from(Array)```，不參照的複製原來陣列並回傳
6. 複製陣列可以用ES6語法```[...Array]```，將Array陣列拆開一個一個放入
7. 複製物件同樣不能由A直接賦予B會變成參照
8. 複製物件可以用```Object.assign(預設值, 複製來源, 變更)``` => ```Object.assign({}, person, { num: 50, age: 25 })```
9. 複製物件可以用ES6語法```{ ...person }```，將物件一個個屬性拆出來放入
10. ```Object.assign```和```{ ...person }```從**第二層**開始還是會參照原來的物件
11. 複製物件並且保證每一階層都**不會參照**```JSON.parse(JSON.stringify(person))```