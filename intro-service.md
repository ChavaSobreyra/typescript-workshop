---
theme: 'night'
transition: 'fade'
highlightTheme: 'monokai-sublime'
---

## Creating a Service with TypeScript

---

```
git clone https://github.com/ChavaSobreyra/ts-service-seed.git
```

```
cd ts-service-seed
```

```
npm i
```

---

#### Choose a business object to build a service for

```
examples: pizza, mortgageOffers, sandwiches
```

<br><br>

Include at least:

- string
- number
- boolean
- an array

---

#### Imagine that there are multiple providers for that business object

```
examples:
pizzas: papa johns, dominoes
offers: loantek, v4, mortech
sandwiches: jimmy johns, jersey mike's
```

<br>
Each provider should have a get method with different fulfillment logic
<br>
```
examples:
pizzas: pricing, wait times
offers: apr calculations, advertisers
sandwiches: available toppings, delivery drivers
```

---

#### Our service will allows us to get these business object from different providers, using a standardized interface

<br>
```javascript
const pizza = orderPizza(pizza, provider)
```

```javascript
const mortgageOffers = getOffers(dimensions, provider)
```

---

#### Project Structure

```
/src
	/interfaces
		business-objects.ts
	/providers
		provider1.ts
		provider2.ts

	index.ts
```

example:

```
/src
	/interfaces
		pizza.ts
	/providers
		papa-johns.ts
		dominoes.ts
		pizza-hut.ts

	index.ts
```
