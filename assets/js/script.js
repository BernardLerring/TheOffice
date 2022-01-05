/* The following tutorial was used to help build this script:
https://www.sitepoint.com/simple-javascript-quiz/.
All elements of the tutorial have been used to help code the quiz
*/

function buildQuiz(){

  //a variable to store the HTML output

  const output = [];

  //each question

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      //variable to store list of possible answers

      const answers = [];

      for(letter in currentQuestion.answers){

        //radio buttons with a label to allow users to press button and text

        answers.push(
          `<label>
          <input type = "radio" name = "question${questionNumber}" value = "${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>` 
        );
      }

      //add this question and answers to the output

      output.push(
          `<div class = "question"> ${currentQuestion.question} </div>
          <div class = "answers"> ${answers.join('')} </div>`
      );
    }
  );

  //combine outputs to one HTML string and show on the page

  quizContainer.innerHTML = output.join('');
}

function showResults(){

  // get answer containers from quiz

  const answerContainers = quizContainer.querySelectorAll('.answers');

  // track user answers

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {

    // find the selected answer

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    //if the answer is correct

    if(userAnswer === currentQuestion.correctAnswer){

      //add one to list of correct answers

      numCorrect++;

      // and color that question green

      answerContainers[questionNumber].style.color = 'green';
    }
    
    else{

      // if no answer submitted or answer wrong, color red 

      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show the number of correct answers out of the total

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

//the quiz questions

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

//display the quiz on website loading

buildQuiz();

//when submit button is pressed, show results

submitButton.addEventListener('click', showResults);

//when restart button is pressed, game reloads

restartButton.addEventListener('click', buildQuiz);





