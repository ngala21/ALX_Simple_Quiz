// DOM Manipiulation 

// Function Declaration
function checkAnswer() {
  
  // Identify the Correct Answer
  let correctAnswer = '4';

  // Retrieve the User's Answer
  let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
  // User Feedback 

  let userFeedback = document.getElementById('feedback');

  // Compare the User's Answer with the Correct Answer

  if (userAnswer === correctAnswer) {
   userFeedback.textContent = 'Correct! Well done.';
   userFeedback.style.color = '#007bff';
  } else {
   userFeedback.textContent = "That's Incorrect! Try Again.";
   userFeedback.style.color = 'orange';
  }
 

} 

// Add EventListener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);