# getObjectValues
在需要取得多層物件結構的屬性時，可以試試看這個小工具。

輸入被搜尋的物件，跟搜尋的路徑，可以尋找想要的結果並輸出陣列。

若被搜尋的對象是陣列，會顯示出所有搜尋結果。

範例：
```js
const getObjectValues = require('./modules/getObjectValue');

const input = {
  key: {
    key2: 123,
    others: '456'
  },
  other: [
    { abc:1, other:3 },
    { cdf:1, other:4 }
  ]
}

getObjectValues(input,'key.key2'); // [123]
getObjectValues(input,'other.abc'); // [1, undefined]
getObjectValues(input,'other.cdf'); // [undefined, 1]
getObjectValues(input,'other.other'); // [3, 4]

```