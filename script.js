const correctAnswers = ["B", "A", "A", "B", "D", "B"];
let score = 0;
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
  ];
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 1;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });
  scroll(0, 0);
  result.classList.remove("hide");
  result.querySelector(
    "p"
  ).textContent = `Your score is ${score}/ ${correctAnswers.length}`;
  console.log(score);
});
