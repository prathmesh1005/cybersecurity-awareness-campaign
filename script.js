
document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  // Define the correct answers
  const correctAnswers = {
      q1: 'b',
      q2: 'a',
      q3: 'b',
      q4: 'a',
      q5: 'b',
      q6: 'c',
      q7: 'a',
      q8: 'b',
      q9: 'b',
      q10: 'b',
      // q11: 'b',
      // q12: 'c'
  };
  
  let score = 0; // Initialize score
  let totalQuestions = Object.keys(correctAnswers).length;
  let userAnswers = new FormData(document.getElementById('quiz-form')); // Collect user inputs

  // Iterate over the questions and check answers
  for (let question in correctAnswers) {
      if (userAnswers.get(question) === correctAnswers[question]) {
          score++;
      }
  }

  // Display the result
  const resultContainer = document.getElementById('quiz-result');
  resultContainer.innerHTML = `
      <p>You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong>.</p>
      <p>${score === totalQuestions ? "Excellent! You're a cybersecurity pro!" : "Keep learning and improving!"}</p>
  `;

  // Highlight the correct and incorrect answers
  for (let question in correctAnswers) {
      const options = document.getElementsByName(question);
      options.forEach(option => {
          if (option.value === correctAnswers[question]) {
              option.parentElement.style.color = 'green'; // Correct answer in green
          } else if (option.checked) {
              option.parentElement.style.color = 'red'; // Incorrect answer in red
          } else {
              option.parentElement.style.color = ''; // Reset other options
          }
      });
  }
});

// Modal elements
