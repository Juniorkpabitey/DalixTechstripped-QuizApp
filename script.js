const quizData = [
  {
    question: "How is the founder of Techstripped-Africa?",
    a: "Mark Anthony",
    b: "Thoby Forge",
    c: "Kwame Ansah Owusu",
    d: "Flex Arthur",
    correct: "c",
  },
  {
    question: "What is the most used stack at Dali-Lab?",
    a: "Java",
    b: "C#",
    c: "Python",
    d: "React and React Native",
    correct: "d",
  },
  {
    question: "Who is the Faculty Director of Dartmouth Dali-Lab",
    a: "Florin Pop",
    b: "Lorie Loeb",
    c: "Ivan Saldano",
    d: "Mihai Andresi",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Mockup Line",
    c: "Hyper Markup Language",
    d: "Hypertrack Mark Line",
    correct: "a",
  },
  {
    question: "What year was Javascript Launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Who is the Program Manager of Dartmouth Dali-Lab",
    a: "Florin Pop",
    b: "Ashley Sigl",
    c: "Ivan Saldano",
    d: "Mihai Andresi",
    correct: "b",
  },
  {
    question:
      "Who is the Director, Co-Founder Senior Lecturer in Computer Science of Dartmouth Dali-Lab",
    a: "Florin Pop",
    b: "Tim Tregubov",
    c: "Ivan Saldano",
    d: "Mihai Andresi",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getselected() {
  let answer = undefined;
  //const answers =document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getselected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
      <button onClick="location.reload()">Reload</button>`;
    }

    loadQuiz();
  }
});
