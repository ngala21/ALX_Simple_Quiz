// DOM Manipiulation 

// Function Declaration
function checkAnswer() {
  
  // Identify the Correct Answer
  let correctAnswer = '4';

  // Retrieve the User's Answer
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
  // User Feedback 

  let feedback = document.getElementById('feedback');

  // Compare the User's Answer with the Correct Answer

  if (userAnswer === correctAnswer) {
   feedback.textContent = 'Correct! Well done.';
   feedback.style.color = '#007bff';
  } else {
   feedback.textContent = "That's Incorrect! Try Again.";
   feedback.style.color = 'orange';
  }


} 

// Add EventListener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
