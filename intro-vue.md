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
