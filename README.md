# Fizz Buzz Mob Exercise

A mob/pair programming exercise to give an intro to the practice.

This exercise is great for all levels to practice Mob/Pair Programming using a common code kata.

# Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
    - [Scripts](#scripts)
    - [Files of Interest](#files-of-interest)
- [Exercise 1](#exercise-1)
- [Exercise 2](#exercise-2)
- [Exercise 3](#exercise-3)
- [Beyond](#beyond)

# Prerequisites
1. Node version `14.15^`, `16.10^` or `18.0^` and A package manager like NPM or Yarn
    - Both can be handled together with a version manager like [nvm](https://github.com/nvm-sh/nvm)
3. A text editor, preferably an IDE such as [VSCode](https://code.visualstudio.com/)
4. [Git](https://git-scm.com/)

# Getting started

1. Fork or download the repo
2. Run `npm run install` or `yarn install`
3. Start with [Exercise 1](#exercise-1)

## Scripts

We'll be using these scripts whilst working through the exercises.

| Name      | Terminal Command                  | Description                                                                       |
| --------- | --------------------------------- | --------------------------------------------------------------------------------- |
| `test`    | `npm run test` or `yarn test`     | Runs the test file(s) using [jest](https://jestjs.io/docs/getting-started)        |
| `format`  | `npm run format` or `yarn format` | Formats working files using [prettier](https://prettier.io/docs/en/index.html)    |
| `start`   | `npm run start` or `yarn start`   | Starts a development server with [Parcel](https://parceljs.org/)                  |
| `build`   | `npm run build` or `yarn build`   | Runs [Parcel](https://parceljs.org/) build command                                |
| `clean`   | `npm run clean` or `yarn clean`   | Removes `dist` and `.parcel-cache` directories                                    |

## Files of interest

These are the main working files located in `./src`. You won't ***NEED*** to work from any other file but may choose to do so as you progress past [Exercise 3](#exercise-3)

| Filename              | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `fizz-buzz.test.js`   | Where we will write our initial tests and production code            |
| `index.html`          | For the UI used in [Exercise 3](#exercise-3)                         |
| `app.js`              | Where we will write our client js for [Exercise 3](#exercise-3)      |

> You can use google as much as you want. It is advised to avoid looking for complete solutions to the exercises. If you do however, why not try to improve the found solution?

# Exercise 1

## Implement Fizz Buzz function

Our function ***MUST*** meet the following conditions:

- Receives a `number` as an argument
- Returns `"Fizz"` if the `number` is divisible by `3`
- Returns `"Buzz"` if the `number` is divisible by `5`
- Returns `"FizzBuzz"` if the `number` is divisible by `3` ***AND*** `5`
- Returns the given `number` if it is not divisible by `3` ***OR*** `5`

## Approach

1. Open `fizz-buzz.test.js`
    - We'll ***ONLY*** be using this file for the first exercise
2. Write a ***failing*** test for one of the conditions
3. Update your Fizz Buzz function to make the test ***pass***
4. ***Repeat*** steps ***2*** and ***3*** until all test conditions are implemented and ***passing***

# Exercise 2

## Fizz Buzz in an array

Implement a new function which ***MUST*** meet the following conditions:

- Receive a `number` to ***count*** up to
- For each `number` starting from `1` up to the given ***count***, call our Fizz Buzz function and ***add*** the result to an `array`
- Return the `array`

***For example:***

Given we pass in the `number` `5`, we should receive the following `array`:

```javascript
fizzBuzzArray(5); // [1, 2, "Fizz", 4, "Buzz"]
```

## Approach

- Use the same approach as [Exercise 1](#exercise-1)

# Exercise 3

## Add functionality to a UI

We have a starter `index.html` file containing ***some*** of the elements we'll need for this exercise.

We want to achieve the following goals:

- When we type a `number` into the `<input />` and ***click run*** it should print out the ***results*** either comma delimited or a result per line within the provided ***results*** element as a `string`
- When we ***click run*** again, the previous ***results*** are ***replaced*** with the new ones

## Approach

1. If you haven't already, ***extract*** your production code from `fizz-buzz.test.js` into it's own file such as `fizz-buzz.js`
    - Note your tests ***MUST*** still pass
2. Open `index.html` and `app.js`
3. Run `npm run start` or `yarn start` script
4. Navigate to `http://localhost:1234/` in your ***browser***
    - Be sure to make use of the ***developer console*** in your ***browser***
5. You ***SHOULD*** still test new units but are not expected to test the frontend yet

# Beyond

Try implementing some more features using the mob. Here are some ***examples*** of things you could add:

- A reset button which clears the input and results
- Print out the results character by character to simulate typing
- Add styles to the UI
- Refactor the app using something like React
- Implement typescript
- Implement tests for the frontend
