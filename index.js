const questions = [
    {
        type: "boolean",
        question: "JavaScript is a client-side programming language that runs in the browser by default.",
        options: ["True", "False"],
        correct: 0
    },
    {
        type: "boolean",
        question: "Variables created with let can be declared multiple times in the same scope.",
        options: ["True", "False"],
        correct: 1
    },
    {
        type: "boolean",
        question: "const means that the value can never be changed.",
        options: ["True", "False"],
        correct: 1
    },
    {
        type: "multiple",
        question: "What does === compares?",
        options: [
            "It compares both value and type.",
            "It only compares values.",
            "It only compares types.",
            "It depends on the browser."
        ],
        correct: 0
    },
    {
        type: "multiple",
        question: "What does document.querySelector() always return?",
        options: [
            "It always returns an array.",
            "It returns the first matching element.",
            "It always returns a NodeList.",
            "It returns null every time."
        ],
        correct: 1
    },
    {
        type: "multiple",
        question: "What can addEventListener() be used to listen to?",
        options: [
            "It only listens to click events.",
            "It can listen to many event types.",
            "Only hover events are supported.",
            "It works only with keyboard events."
        ],
        correct: 1
    },
    {
        type: "checkbox",
        question: "What is true about NaN === NaN in JavaScript?",
        options: [
            "This statement is false.",
            "NaN never equals itself.",
            "It becomes true only in strict mode.",
            "It is true only inside arrays."
        ],
        correct: [0, 1]
    },
    {
        type: "checkbox",
        question: "What can a function in JavaScript return?",
        options: [
            "Functions can return back a value.",
            "Functions can return objects.",
            "Functions can return arrays.",
            "Functions can return multiple separate independent values?"
        ],
        correct: [0, 1, 2]
    },
    {
        type: "checkbox",
        question: "What can the array method .push() do?",
        options: [
            "push() adds to the end.",
            "push() method returns the new length of the array",
            "push() adds to the middle.",
            "push() removes an element."
        ],
        correct: [0, 1]
    },
    {
        type: "checkbox",
        question: "What is true about that typeof null returns 'object'?",
        options: [
            "This is a JavaScript bug.",
            "It is historically incorrect.",
            "It still works this way today.",
            "typeof null returns 'null'."
        ],
        correct: [0, 1, 2]
    }
];

const quizContainer = document.querySelector('#quiz-container');
const submitBtn = document.querySelector('#submit-btn');
const resultDiv = document.querySelector('#result');

function loadQuiz() {
    questions.forEach((q, index) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add("question-card");


        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${q.question}`;
        wrapper.append(title);
        
        //  Boolean & Multiple Choice (Radio Buttons)
        if(q.type === "boolean" || q.type === "multiple") {
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
        }

        // Checkbox
        if(q.type === "checkbox") {
            q.options.forEach((opt, i) => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');

                checkbox.type = 'checkbox';
                checkbox.name = 'question' + index;
                checkbox.value = i;

                label.append(checkbox);
                label.append(document.createTextNode(opt));

                wrapper.append(label);
                wrapper.append(document.createElement('br'));
            });
        }

        quizContainer.append(wrapper);
    });
}

loadQuiz();

submitBtn.addEventListener("click", () => {
    let score = 0;

    questions.forEach((q, index) => {
        // Find the wrapper for each question
        const wrapper = quizContainer.children[index];
        wrapper.classList.remove("correct", "incorrect"); // Cleaning old style
        const oldCorrectText = wrapper.querySelector(".correct-answer");
        if (oldCorrectText) oldCorrectText.remove(); // Cleaning old answers

        // Boolean & Multiple
        if(q.type === "boolean" || q.type === "multiple") {
            const selected = document.querySelector(
                `input[name="question${index}"]:checked`
            );

            if(selected) {
                if (Number(selected.value) === q.correct) {
                    score++;
                    wrapper.classList.add("correct");
                } else {
                    wrapper.classList.add("incorrect");
                    // Show correct answer
                    const correctText = document.createElement("div");
                    correctText.classList.add("correct-answer");
                    correctText.textContent = "Correct answer: " + q.options[q.correct];
                    wrapper.append(correctText);
                }
            } else {
                // Mark as wrong even if nothing is selected in boolean and multiple choice questions
                wrapper.classList.add("incorrect");
                const correctText = document.createElement("div");
                correctText.classList.add("correct-answer");
                correctText.textContent = "Correct answer: " + q.options[q.correct];
                wrapper.append(correctText);
            }
        }
        // Checkbox
        if (q.type == "checkbox") {
            const selected = Array.from(
                document.querySelectorAll(`input[name="question${index}"]:checked`)
            ).map(input => Number(input.value));

            const correctArray = q.correct;

            const isCorrect =
                selected.length === correctArray.length &&
                selected.every(v => correctArray.includes(v));
            
            if(isCorrect) {
                score++;
                wrapper.classList.add("correct");
            } else {
                wrapper.classList.add("incorrect");
                const correctText = document.createElement("div");
                correctText.classList.add("correct-answer");

                const correctLabels = q.correct.map(i => q.options[i]).join(", ");

                correctText.textContent = "Correct answers: " + correctLabels;
                wrapper.append(correctText);
            }
        }
    });

    resultDiv.textContent = `You got ${score} of ${questions.length} correct!`;

    const percentage = (score / questions.length) * 100;
    let message = "";
    let color = "";

    if(percentage < 50) {
        message = "Fail 😢";
        color = "red";
    } else if (percentage <= 75) {
        message = "Good 😊";
        color = "orange";
    } else {
        message = "Excellent! 🎉🎉";
        color = "green";
    }

    resultDiv.textContent = `You got ${score} of ${questions.length} right - ${message}`;
    resultDiv.style.color = color;
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});