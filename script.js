let currentQuestion = 0;

function init() {
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question-title").innerHTML = question.question;
  document.getElementById("answer_1").innerHTML = question.answer_1;
  document.getElementById("answer_2").innerHTML = question.answer_2;
  document.getElementById("answer_3").innerHTML = question.answer_3;
  document.getElementById("answer_4").innerHTML = question.answer_4;
  document.getElementById("total-questions").innerHTML = questions.length;
  showQuestionNumber();
}

function showAnswer(selection) {
  let question = questions[currentQuestion];
  selection == question.correctAnswer
    ? // ? console.log(`✅ Richtig!`)
      ((document.getElementById(
        selection
      ).innerHTML = `<strong>${question[selection]}</strong> = ist korrekt! <span class="answer-icons">✅</span>`),
      document.getElementById(selection).parentNode.classList.add("bg-success"))
    : // : console.log(`❌ Falsch!`);
      ((document.getElementById(
        selection
      ).innerHTML = `<strong>${question[selection]}</strong> = ist falsch! <span class="answer-icons">❌</span>`),
      document
        .getElementById(selection)
        .parentNode.classList.add("text-bg-danger"));
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetOptions();
  showQuestion();
  showQuestionNumber();
}

function resetOptions() {
  document
    .getElementById("answer_1")
    .parentNode.classList.remove("text-bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document
    .getElementById("answer_2")
    .parentNode.classList.remove("text-bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document
    .getElementById("answer_3")
    .parentNode.classList.remove("text-bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document
    .getElementById("answer_4")
    .parentNode.classList.remove("text-bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function showQuestionNumber() {
  let currentQuestionNumber = currentQuestion + 1;
  document.getElementById("current-question").innerHTML = currentQuestionNumber;
}
