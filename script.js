const iconArrow = document.querySelectorAll(".icon-arrow");
const linkBoxes = document.querySelectorAll("a");
const answer = document.querySelectorAll(".ans-1");
// const answer2 = document.querySelector(".ans-2");
// const answer3 = document.querySelector(".ans-3");
// const answer4 = document.querySelector(".ans-4");
// const answer5 = document.querySelector(".ans-5");
const questions = document.querySelectorAll(".questions");
// const q2 = document.querySelector(".question-2");
// const q3 = document.querySelector(".question-3");
// const q4 = document.querySelector(".question-4");
// const q5 = document.querySelector(".question-5");

let timesClicked = 0;

linkBoxes.forEach((items, index) => {
  items.addEventListener("click", function () {
    rotateArrow(index);
  });
});

function rotateArrow(index) {
  // const arrow = `iconArrow${index}`;
  const arrow = document.querySelectorAll(".icon-arrow")[index];
  const question = document.querySelectorAll(".questions")[index];
  const ans = document.querySelectorAll(".answer")[index];
  const linkBox = document.querySelectorAll(".link-box")[index];

  if (index === 0) {
    faqFunction(arrow, question, ans, linkBox);
  } else if (index === 1) {
    faqFunction(arrow, question, ans, linkBox);
  } else if (index === 2) {
    faqFunction(arrow, question, ans, linkBox);
  } else if (index === 3) {
    faqFunction(arrow, question, ans, linkBox);
  } else if (index === 4) {
    faqFunction(arrow, question, ans, linkBox);
  }
}

function faqFunction(arrow, question, ans, linkBox) {
  arrow.classList.toggle("pressed");
  question.classList.toggle("make-bold");
  ans.classList.toggle("hidden");
  linkBox.classList.toggle("add-border");
}
