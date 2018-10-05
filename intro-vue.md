---
theme: 'night'
transition: 'fade'
highlightTheme: 'monokai-sublime'
---

## Introduction to Using TypeScript in Vue

---

##### Choosing Between Vue.extend() and vue-class-component

---

Vue.extend()

```javascript
export default Vue.extend({
  data() {
    return {
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Good bye'
    }
  }
})
```

Note: fights to keep current style

---

Class Component

```javascript
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

##### Install Vue CLI

```
npm i -g vue-cli
```

---

- @Decorators
- Often times less verbose than vanilla javascript

---

- namesspaces // TODO: research this before talking about it!

- type inference: const x = "hello" in TypeScript is the same as const x : string = "hello"

## Part 1: Working in the Vuex Store to get offers

1. Get offers from the api

## Part 2: Building out UI components using typescript

1.

---

## Some Fun Stuff We Will Use

- TypeScript
- Vue CLI
- Jest
- Pug https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33
- Stylus http://stylus-lang.com/docs/selectors.html

---
