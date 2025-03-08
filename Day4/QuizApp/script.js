const quizData = [
  {
    question: "Which of the following sports is not part of the triathlon?",
    correctAnswer: "Horse-Riding",
    incorrectAnswers: ["Cycling", "Swimming", "Running"],
  },
  {
    question: "In what sport is a 'shuttlecock' used?",
    correctAnswer: "Badminton",
    incorrectAnswers: ["Table Tennis", "Rugby", "Cricket"],
  },
  {
    question:
      "How many soccer players should be on the field at the same time?",
    correctAnswer: "22",
    incorrectAnswers: ["20", "24", "26"],
  },
  {
    question: "Which country hosted the 2018 FIFA World Cup?",
    correctAnswer: "Russia",
    incorrectAnswers: ["Germany", "United States", "Saudi Arabia"],
  },
  {
    question: "Which team won the 2015-16 English Premier League?",
    correctAnswer: "Leicester City",
    incorrectAnswers: ["Liverpool", "Cheslea", "Manchester United"],
  },
  {
    question: "Which English football club has the nickname 'The Foxes'?",
    correctAnswer: "Leicester City",
    incorrectAnswers: [
      "Northampton Town",
      "Bradford City",
      "West Bromwich Albion",
    ],
  },
  {
    question:
      "In bowling, what is the term used for getting three consecutive strikes?",
    correctAnswer: "Turkey",
    incorrectAnswers: ["Flamingo", "Birdie", "Eagle"],
  },
  {
    question: "Who won the UEFA Champions League in 2016?",
    correctAnswer: "Real Madrid C.F.",
    incorrectAnswers: [
      "FC Bayern Munich",
      "Atletico Madrid",
      "Manchester City F.C.",
    ],
  },
  {
    question:
      "Which driver has been the Formula 1 world champion for a record 7 times?",
    correctAnswer: "Michael Schumacher",
    incorrectAnswers: ["Ayrton Senna", "Fernando Alonso", "Jim Clark"],
  },
  {
    question: "Who is often called 'the Maestro' in the men's tennis circuit?",
    correctAnswer: "Roger Federer",
    incorrectAnswers: ["Bill Tilden", "Boris Becker", "Pete Sampras"],
  },
];

const quizContainer = document.querySelector(`.quiz-container`);

const createQuestionElement = (questionData) => {
  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  const question = document.createElement("h3");
  question.innerText = questionData.question;

  questionContainer.appendChild(question);

  const optionContainer = document.createElement("div");
  optionContainer.classList.add("option-container");

  const correctAnswerPosition = Math.floor(Math.random() * 4);
  let incorrectAnswersIndex = 0;
  for (let i = 0; i < 4; i++) {
    const option = document.createElement("div");
    option.classList.add("option");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const status = document.createElement("span");

    checkbox.addEventListener("click", (event) => {
      const childNodes = event.target.parentElement.parentElement.childNodes;
      childNodes.forEach((option) => {
        if (option.firstChild !== event.target) {
          option.firstChild.checked = false;
          option.lastChild.innerText = "";
          option.lastChild.style.color = "";
        }
      });

      if (event.target.checked) {
        if (correctAnswerPosition === i) {
          status.innerText = " CORRECT";
          status.style.color = "green";
        } else {
          status.innerText = " WRONG";
          status.style.color = "red";
        }
      } else {
        status.innerText = "";
      }
    });

    option.appendChild(checkbox);

    const optionText = document.createElement("span");
    if (correctAnswerPosition === i) {
      optionText.innerText = questionData.correctAnswer;
    } else {
      optionText.innerText =
        questionData.incorrectAnswers[incorrectAnswersIndex++];
    }

    option.appendChild(optionText);
    option.appendChild(status);
    optionContainer.appendChild(option);
    questionContainer.appendChild(optionContainer);
  }
  return questionContainer;
};

quizData.map((questionData) => {
  quizContainer.appendChild(createQuestionElement(questionData));
});
