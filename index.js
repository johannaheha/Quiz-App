// Bookmark-Toggle für das erste Bookmark

const bookmarkIcon = document.querySelector(".questioncard__bookmark");

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("ph");
  bookmarkIcon.classList.toggle("ph-fill");
  bookmarkIcon.classList.toggle("active");
});

// Answer-Button:

const answerButton = document.querySelector('[data-js="toggle-answer"]');
const answer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("questioncard__answer--hidden");

  const isHidden = answer.classList.contains("questioncard__answer--hidden");
  answerButton.textContent = isHidden ? "show answer" : "hide answer";
  console.log(isHidden);
});
