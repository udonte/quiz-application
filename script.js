const correctedAnswers = ["A", "A", "A", "A", "A", "A"];
const result = document.querySelector(".result");
const form = document.querySelector(".quiz-form");
const questions = document.querySelectorAll(".question");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
  ];
  correctedAnswers.forEach((answer, index) => {
    if (answer === userAnswers[index]) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });
  console.log(score);
  scroll(0, 0);
  result.classList.remove("hide");
  result.querySelector(
    "p"
  ).textContent = `You scored ${score}/${questions.length}!`;
});
