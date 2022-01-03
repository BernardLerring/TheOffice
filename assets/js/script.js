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
        `<div class = "question"> ${currentQuestion.question} </div>
        <div class = "answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){

      numCorrect++;

      answerContainers[questionNumber].style.color = 'green';
    }
    
    else{

      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "Gareth gets irrationally upset when Tim puts his stapler in the jelly. Why doesn't Gareth like jelly?".bold(),
    answers: {
        a: "He got sick from eating too much of it when he was younger", 
        b: "He doesn't trust the way it moves",
        c: "Dessert isn't allowed in the Territorial Army"
    },
    correctAnswer: "b"
  },

  {
    question: "What is the name of David Brent's former band?".bold(),
    answers: {
        a: "Foregone Conclusion",
        b: "Equality Street",
        c: "Life on the Road"
    },
    correctAnswer: "a"
  },

  {
    question: "What gift does Tim's mum give him for his 30th birthday?".bold(),
    answers: {
        a: "Hat FM",
        b: "A giant inflatable penis",
        c: "A bottle of something"
    },
    correctAnswer: "a"
  },

  {
    question: "In what romantic and thrifty way does Lee propose to Dawn?".bold(),
    answers: {
        a: "Using a Haribo sweet ring",
        b: "An advert in the paper",
        c: "A homemade card"
    },
    correctAnswer: "b"
  },

  {
    question: "What does Keith put as his only weakness on an employee evaluation form?".bold(),
    answers: {
        a: "Kissing",
        b: "Eating",
        c: "Eczema"
    },
    correctAnswer: "c"
  },

  {
    question: "Which famous author do Ricky and David have a back and forth over to try and prove their knowledge?".bold(),
    answers: {
        a: "JK Rowling",
        b: "Fyodor Dostoevsky",
        c: "Roald Dahl"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of David's boss?".bold(),
    answers: {
        a: "Jennifer Taylor-Clarke",
        b: "Keira Kennedy-Smith",
        c: "Mira Wernham-Hogg"
    },
    correctAnswer: "a"
  },
  {
    question: "When giving the temp a tour of the office, David Brent asks someone to get batteries for what type of toy?".bold(),
    answers: {
        a: "Dirty Bertie",
        b: "Billy Big Bass",
        c: "Monkey"
    },
    correctAnswer: "b"
  },
  {
    question: "What type of car does Gareth brag about doing up?".bold(),
    answers: {
        a: "MG",
        b: "Porsche",
        c: "TR3"
    },
    correctAnswer: "c"
  },
  {
    question: "What are the names of the parents of Donna the temp?".bold(),
    answers: {
        a: "John and Jane",
        b: "Ron and Elaine",
        c: "Dave and Beth"
    },
    correctAnswer: "b"
  },
];

buildQuiz();

submitButton.addEventListener('click', showResults);

document.getElementById("submit").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      showResults();
  }
});


