class TypedEncabulator {
  private name: string
  private readonly secret: boolean

  constructor(name, secret) {
    this.name = name
    this.secret = secret
  }

  private divide(a, b) {
    return a / b
  }

  private add(a, b) {
    return a + b
  }
}
