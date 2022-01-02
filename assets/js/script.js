function buildQuiz(){

  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
          <input type = "radio" name = "question${questionNumber}" value = "${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>` 
        );
      }

      output.push(
        `<div class = "question"> ${currentQuestion.question}</div>
        <div class = "answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){

      numCorrect++;

      answerContainers[questionNumber].getElementsByClassName.color = "green";
    }
    
    else{

      answerContainers[questionNumber].getElementsByClassName.color = "red";
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Gareth gets irrationally upset when Tim puts his stapler in the jelly. Why doesn't Gareth like jelly?",
    answers: {
        a: "He got sick from eating too much of it when he was younger", 
        b: "He doesn't trust the way it moves",
        c: "Dessert isn't allowed in the Territorial Army"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of David Brent's former band?",
    answers: {
        a: "Foregone Conclusion",
        b: "Equality Street",
        c: "Life on the Road"
    },
    correctAnswer: "a"
  },
  {
    question: "What gift does Tim's mum give him for his 30th birthday?",
    answers: {
        a: "Hat FM",
        b: "A giant inflatable penis",
        c: "A bottle of something"
    },
    correctAnswer: "a"
  },
  {
    question: "In what romantic and thrifty way does Lee propose to Dawn?",
    answers: {
        a: "Using a Haribo sweet ring",
        b: "An advert in the paper",
        c: "A homemade card"
    },
    correctAnswer: "b"
  },
  {
    question: "What does Keith put as his only weakness on an employee evaluation form?",
    answers: {
        a: "Kissing",
        b: "Eating",
        c: "Eczema"
    },
    correctAnswer: "c"
  }
];

buildQuiz();

submitButton.addEventListener('click', showResults);


