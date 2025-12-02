/* const quizContainer = document.querySelector('#quiz-container');

function loadQuiz() {
    questions.forEach((q, index) => {
        const wrapper = document.createElement('div');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${q.question}`;
        wrapper.append(title);

        q.options.forEach((opt, i) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');

            radio.type = 'radio';
            radio.name = 'question' + index;
            radio.value = i;

            label.append(radio);
            label.append(document.createTextNode(opt));

            wrapper.append(label);
            wrapper.append(document.createElement('br'));
        });

        quizContainer.append(wrapper);
    });
}

loadQuiz(); */

const questions = [
    {
    question: "JavaScript is a client-side programming language that runs in the browser by default.",
    options: ["True", "False"],
    correct: 0
  },
  {
    question: "Variables created with let can be declared multiple times in the same scope.",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "const means that the value can never be changed.",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "=== compares both value and data type.",
    options: ["True", "False"],
    correct: 0
  },
  {
    question: "document.querySelector() always returns a list of elements.",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "addEventListener() can be used to listen to clicks, keyboard input, and other events.",
    options: ["True", "False"],
    correct: 0
  },
  {
    question: "NaN === NaN is true in JavaScript.",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "A function in JavaScript can return a value using return.",
    options: ["True", "False"],
    correct: 0
  },
  {
    question: "The array method .push() adds an element to the beginning of the array.",
    options: ["True", "False"],
    correct: 1
  },
  {
    question: "typeof null returns 'object'.",
    options: ["True", "False"],
    correct: 0
  }
];

console.log(questions);

const quizContainer = document.querySelector('#quiz-container');

function loadQuiz() {
    questions.forEach((q, index) => {
        const wrapper = document.createElement('div');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${q.question}`;
        wrapper.append(title);

        q.options.forEach((opt, i) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');

            radio.type = 'radio';
            radio.name = 'question' + index;
            radio.value = i;

            label.append(radio);
            label.append(document.createTextNode(opt));

            wrapper.append(label);
            wrapper.append(document.createElement('br'));
        });

        quizContainer.append(wrapper);
    });
}

loadQuiz();