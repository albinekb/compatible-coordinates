class Coordinates extends Array {
  constructor(latitude, longitude) {
    super(latitude, longitude)
  }

  reversed() {
    return new ReversedCoordinates(this[1], this[0])
  }

  get lat() {
    return this[0]
  }
  get latitude() {
    return this[0]
  }
  get lng() {
    return this[1]
  }
  get lon() {
    return this[1]
  }
  get longitude() {
    return this[1]
  }
}

class ReversedCoordinates extends Array {
  constructor(longitude, latitude) {
    super(longitude, latitude)
  }

  reversed() {
    return new Coordinates(this[1], this[0])
  }

  get lat() {
    return this[1]
  }
  get latitude() {
    return this[1]
  }
  get lng() {
    return this[0]
  }
  get lon() {
    return this[0]
  }
  get longitude() {
    return this[0]
  }
}

module.exports = Coordinates
