// Bookmark-Toggle für das erste Bookmark

const bookmarkIcon = document.querySelector(".questioncard__bookmark");

    bookmarkIcon.addEventListener("click", () => {
        bookmarkIcon.classList.toggle("ph");
        bookmarkIcon.classList.toggle("ph-fill");
        bookmarkIcon.classList.toggle("active");
    })

// Answer-Button:

const answerButton = document.querySelector('[data-js="toggle-answer"]');
const answer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
 answer.classList.toggle("questioncard__answer--hidden");
 
 const isHidden = answer.classList.contains("questioncard__answer--hidden") 
 answerButton.textContent = isHidden ? "show answer" : "hide answer";
 console.log(isHidden);
});




  // Toggle-Funktion für Antwort - funktioniert auf neuer Karte
//   const answerButton = newCard.querySelector('[data-js="toggle-answer"]');
//   const answerText = newCard.querySelector('[data-js="card-answer"]');

//   answerButton.addEventListener("click", () => {
//     answerText.classList.toggle("questioncard__answer--hidden");
//     answerButton.textContent = answerText.classList.contains("questioncard__answer--hidden")
//       ? "show answer"
//       : "hide answer";
//   });

 

        // answerButton.textContent = answer.classList.contains("questioncard__answer-hidden")
        // ? "show answer" : "hide answer"; });