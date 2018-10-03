## Prerequisites

Vue-cli
VS Code (if wanting to live share)

## Introduction

- Why Typescript?
- Quick review of how to use Typescript
- Typescript shines at scale, these small examples won't do it justice
- eliminiating `if(typof foo === 'string')

## Introduction to Using Typescript in Vue

- Class Based Syntax
- @Decorators
- Often times less verbose than vanilla javascript

## Some Fun Stuff We Will Use

- Vue CLI
- Typescript
- Jest
- Pug https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33
- Stylus http://stylus-lang.com/docs/selectors.html

## Explain what we are doing today

- Pairs of 2
- Work on a piece, then regroup

## Part 0: Vanilla Typescript

- namesspaces // TODO: research this before talking about it!

- type inference: const x = "hello" in TypeScript is the same as const x : string = "hello"
- transpiled code is still very readable - [http://www.typescriptlang.org/play/](http://www.typescriptlang.org/play/_)
- Adding types to an object/schema
- Adding types to functions
  - Adding types to function which return a promise
- creating interface and using it in another file
  - [automatic imports](https://code.visualstudio.com/docs/languages/typescript#_auto-imports)
  - code completion / not having to reference another file
  - knowing when you are passing wrong arguments (catching bugs!!!)
  - es6 classes in node
  - public / private (no ugly symbols!)
- changing an interface which others depend on
  - renaming a file which others depend on
  - ever been afraid to change something because you don't know exactly everone else that relies on it? [implementations code lens](https://code.visualstudio.com/docs/languages/typescript#_implementations-codelens)
- strict null checking
  - who is sick of this error `cannot read property 'x' of undefined`
  - you cannot use a variable that is not defined!
  - identify issues early!
  - --strictNullChecks
- unlocking oop patterns
  - polymorphism

## Part 1: Working in the Vuex Store to get offers

1. Get offers from the api

## Part 2: Building out UI components using typescript

1.
