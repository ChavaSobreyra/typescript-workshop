---
theme : "night"
transition: "fade"
highlightTheme : "monokai-sublime"
---

### TypeScript Workshop


---

### Why TypeScript?

---

TypeScript makes our job easier

Note: these examples won't do it justice

---

 How does TypeScript make my job more easy?

---

```
Error: Cannot read property 'foo' of undefined
```

Note: you cannot use a variable that is not defined!

---

## Introduction to Using TypeScript in Vue

---

#### Choosing Between Vue.extend() and Vue Class Component

---

Vue.extend()

```
export default Vue.extend({
  data () {
    return {
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    changeMessage () {
      this.message = 'Good bye'
    }
  }
})
```

Note: fights to keep current style

---

Class Component

```
@Component
export default class MyComponent extends Vue {
  message = "hi"

  get reverseMessage() {
    return this.message.split('').reverse().join('')
  }

  changeMessage() {
    this.message = "Good bye'
  }
}
```

Note: Embraces javascript

---

#### Decorators

Note: Often times less verbose than vanilla javascript

---

- @Decorators
- Often times less verbose than vanilla javascript

---

## Some Fun Stuff We Will Use

- TypeScript
- Vue CLI
- Jest
- Pug https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33
- Stylus http://stylus-lang.com/docs/selectors.html

---

## Exercises

---


### Defining Basic Types

- string
- number
- boolean

---

### Enums

Enums allow us to define a collection or set of options.

Enums allow you to define possible pizza toppings as pepperoni, sausace, onions, but never pineapple.

---

### Defining Args and Returns

You can define types on function arguments, and also on function return values

- Catching bugs like passing wrong arguments, or trying to use a property of an undefined

---

### Promises and Async Functions

`Promise<string>`

---

### Consuming Your Interfaces

- Automatic imports
- Code completion
- Catching bugs

---

### Refactoring

- Change within file
- Changes to intefaces with many consumers
  [implementations code lens](https://code.visualstudio.com/docs/languages/typescript#_implementations-codelens)

---

### OOPy Classes

- es6 classes in node
- public / private (no ugly symbols!)

---

### Polymorphism (pizzerias)

Allows us to have multiple pizzeria which conform to the same interace

---

- namesspaces // TODO: research this before talking about it!

- type inference: const x = "hello" in TypeScript is the same as const x : string = "hello"

## Part 1: Working in the Vuex Store to get offers

1. Get offers from the api

## Part 2: Building out UI components using typescript

1.
