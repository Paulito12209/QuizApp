let currentQuestion = 0;
let rightQuestion = 0;
let CORRECT_AUDIO = new Audio("assets/audio/correct.mp3");
let WRONG_AUDIO = new Audio("assets/audio/wrong.mp3");

function init() {
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("start_quiz_btn").disabled = false;
    document.getElementById("progress-bar").style = "display: none";
    document.getElementById("question-title").innerHTML = "Quiz beendet! 🎉";
    document.getElementById("question-body").style = "display:none";
    document.getElementById("footer-info-start").style = "";
    document.getElementById("footer-info-end").style = "";
    document.getElementById("next-button").style = "display:none";
    document.getElementById("quiz-banner").style = "display:none";
    document.getElementById("quiz-image").style = "";
  } else {
    let question = questions[currentQuestion];
    let progressPercent = currentQuestion / questions.length;
    progressPercent = Math.round(progressPercent * 100);
    document.getElementById(
      "progress-percent"
    ).innerHTML = `${progressPercent} %`;
    document.getElementById(
      "progress-percent"
    ).style = `width: ${progressPercent}%`;

    document.getElementById("question-title").innerHTML = question.question;
    document.getElementById("answer_1").innerHTML = question.answer_1;
    document.getElementById("answer_2").innerHTML = question.answer_2;
    document.getElementById("answer_3").innerHTML = question.answer_3;
    document.getElementById("answer_4").innerHTML = question.answer_4;
    document.getElementById("total-questions").innerHTML = questions.length;
    document.getElementById("footer-info-start").style = "display:none";
    document.getElementById("footer-info-end").style = "display:none";
    showQuestionNumber();
  }
}

function showAnswer(selection) {
  let question = questions[currentQuestion];
  selection == question.correctAnswer
    ? // ? console.log(`✅ Richtig!`)
      ((document.getElementById(
        selection
      ).innerHTML = `<strong>${question[selection]}</strong> = ist korrekt! <span class="answer-icons">✅</span>`),
      document.getElementById(selection).parentNode.classList.add("bg-success"),
      CORRECT_AUDIO.play(),
      rightQuestion++)
    : // : console.log(`❌ Falsch!`);
      ((document.getElementById(
        selection
      ).innerHTML = `<strong>${question[selection]}</strong> = ist falsch! <span class="answer-icons">❌</span>`),
      WRONG_AUDIO.play(),
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

function restartGame() {
  currentQuestion = 0;
  rightQuestion = 0;
  document.getElementById("next-button").style = "";
  document.getElementById("quiz-banner").style = "";
  document.getElementById("quiz-image").style = "display:none";
  document.getElementById("question-body").style = "";
  init();
  document.getElementById("start_quiz_btn").disabled = true;
}
