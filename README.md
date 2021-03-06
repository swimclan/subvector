Subvector
==============

A simple data structure to manage multiple linear vectors at arbitrary lengths

* * *

This package provides a simple data structure to create any vector sequence at any period (ie for moving average computation).  Allows developers to create a single data structure to capture and return sequences at any period length.

### List of features

*   Usage of a single data structure that can be used to derive vector sequences at any arbitrary length
*   Simple factory function instantiation 
*   Simple add/get api for managing vector

### Code Demo

```js
const Vector = require('subvector');

const v = Vector();
for (let count=1; count<=5000; count++) {
  const randomNum = Math.floor(Math.random() * 100);
  v.add(randomNum);
}

console.log(v.get(3));
// [89, 90, 13]
console.log(v.get(5));
// [67, 78, 89, 90, 13]
console.log(v.get(10));
// [12, 23, 34, 45, 56, 67, 78, 89, 90, 13]
console.log(v.length);
// 5000
console.log(v.at(5000));
// 13
v.each((value, position) => {
  console.log(value, position);
});
// ...
// 67 4996
// 78 4997
// 89 4998
// 90 4999
// 13 5000
```

### Download & Installation

```shell 
$ npm i subvector
```

### Contributing

Send me PRs.  I like contribution.

### Authors or Acknowledgments

*   Matthew Herron

### License

This project is licensed under the ISC License