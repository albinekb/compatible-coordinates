# Compatible coordinates

## Install

```sh
yarn add compatible-coordinates
```

```sh
npm install --save compatible-coordinates
```

## Usage

```js
const CompatibleCoordinates = require('./')

const home = new CompatibleCoordinates(59, 18)

console.log(home.latitude) //=> 59
console.log(home.lat) //=> 59
console.log(home[0]) //=> 59

console.log(home.longitude) //=> 18
console.log(home.lng) //=> 18
console.log(home.lon) //=> 18
console.log(home[1]) //=> 18

console.log(home) //=> [59, 18]
```
