# Compatible coordinates

If you ever worked with coordinates on the web you probably know that there's no "standard" way of passing them around to libraries etc.

**Examples that this solves:**

* Google maps wants `{ lat, lng }` and `[latitude, longitude]`
* SMHI (Swedish weather) wants `{ lat, lon }`
* [cheap-ruler](https://github.com/mapbox/cheap-ruler#distancea-b) wants `[longitude, latitude]` (reversed!!!!)

Or versose, because tab completion and readability `{ latitude, longitude }`

## Install

```sh
yarn add compatible-coordinates
```

```sh
npm install --save compatible-coordinates
```

## Usage

```js
const CompatibleCoordinates = require('compatible-coordinates')

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

### Reversed tuple

For some reason, [cheap-ruler](https://github.com/mapbox/cheap-ruler#distancea-b) expects the coordinates in [longitude, latitude], to reverse the tuple without changing the behaviour of the other properties, you can use **.reversed()**

```js
const homeReversed = home.reversed()

console.log(home[0]) //=> 59
console.log(homeReversed[0]) //=> 18

console.log(homeReversed.longitude) // => 18
```

## Credits

[@linusu](https://github.com/linusu) for coming up with this clever but simple solution ⚡️
