class TypedEncabulator {
  private properties
  private readonly secret

  constructor(properties, secret) {
    this.properties = properties
    this.secret = secret
  }

  private divide(a, b) {
    return a / b
  }

  private add(a, b) {
    return a + b
  }
}
