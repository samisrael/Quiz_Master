# Quiz_Master
## Date: 12/07/2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>QuizMaster</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="container">
    <h1>Quiz Master</h1>

    <div class="question">
      <p>1. What is the capital of France?</p>
      <input type="text" id="q1" placeholder="Your answer">
    </div>

    <div class="question">
      <p>2. 5 + 7 = ?</p>
      <input type="number" id="q2" placeholder="Your answer">
    </div>

    <div class="question">
      <p>3. What color is the sky on a clear day?</p>
      <input type="text" id="q3" placeholder="Your answer">
    </div>

    <button onclick="calculateScore(strictScoring)">Check Score (Strict)</button>
    <button onclick="calculateScore(lenientScoring)">Check Score (Lenient)</button>

    <p id="result"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>

```
## CSS Code:
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}

.container {
  width: 90%;
  max-width: 600px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
}

h1 {
  text-align: center;
  color: #333333;
}

.question {
  margin-bottom: 20px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

button {
  background-color: #00ff00;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}

button:hover {
  background-color: #45f70e;
}

#result {
  margin-top: 25px;
  font-size: 22px;
  color: #222222;
  text-align: center;
  font-weight: bold;
}

```
## JavaScript Code:
```js
function calculateScore(callback) {
  const answers = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim(),
    q3: document.getElementById("q3").value.trim(),
  };

  const score = callback(answers);
  document.getElementById("result").textContent = `Your score: ${score}/3`;
}

function strictScoring(answers) {
  let score = 0;
  if (answers.q1.toLowerCase() === "paris") score++;
  if (parseInt(answers.q2) === 12) score++;
  if (answers.q3.toLowerCase() === "blue") score++;
  return score;
}


function lenientScoring(answers) {
  let score = 0;
  if (answers.q1.toLowerCase().includes("paris")) score++;
  if (Math.abs(parseInt(answers.q2) - 12) <= 1) score++; 
  if (answers.q3.toLowerCase().includes("blue")) score++;
  return score;
}

```
## Output:

## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
