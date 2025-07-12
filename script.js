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
