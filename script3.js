const questions = [
    { question: "Question 1", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 0 },
    // Add more questions here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let username = "";
  
  function login() {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
  
    // Perform login validation here (e.g., check credentials against database)
    // For simplicity, let's just check if the username is not empty
    if (enteredUsername.trim() !== "") {
      username = enteredUsername;
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("quizContainer").style.display = "block";
      displayQuestion();
    } else {
      alert("Invalid username/password");
    }
  }
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    
    optionsElement.innerHTML = "";
    currentQ.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
  
    const profileElement = document.getElementById("profile");
    profileElement.textContent = "Profile: " + username;
  
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Score: " + score + " out of " + questions.length;
  }
  