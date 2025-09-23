let currentCustion = 0;

function init() {
  showQuestion();
}

function showQuestion() {
  let question = questions[currentCustion];

  document.getElementById("question-title").innerHTML = question.question;
  document.getElementById("answer-1").innerHTML = question.answer_1;
  document.getElementById("answer-2").innerHTML = question.answer_2;
  document.getElementById("answer-3").innerHTML = question.answer_3;
  document.getElementById("answer-4").innerHTML = question.answer_4;
  document.getElementById("total-questions").innerHTML = questions.length;
}
