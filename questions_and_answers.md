<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`
<p>Please Click to the answer to read to the answer</p>

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
<i>B: ReferenceError: greetign is not defined
here variable name is declared as greeting but it console loged as greetign
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`
<p>Please Click to the answer to read to the answer</p>

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
<i>Here the + operator is used with a string and a number which concatenates the values into a string. So it gives a string and the answer is  "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`
<p>Please Click to the answer to read to the answer</p>

<details><summary><b> </b></summary>
<p>

#### Answer: ?

<i>Answer is - A: `['🍕', '🍫', '🥑', '🍔']`  here favorite food is 🍕 which assigned it on 🍝 which dont change the array of food </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`
<p>Please Click to the answer to read to the answer</p>

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i> the answer is `Hi there, undefined` . Here  the sayHi function expects a name parameter,  it is called without any arguments, name gives  undefined. So it concatenates undefined in the string. </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4
<p>Please Click to the answer to read to the answer</p>

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i> The answer is 3The forEach method iterates over the nums array elements. In JavaScript, non zero number is considerate to be true. So when it  found 0, the condition not execute and count . For non zero element it counts only </i>

</p>
</details>
