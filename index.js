// Bookmark-Toggle für das erste Bookmark

const bookmarkIcon = document.querySelector(".questioncard__bookmark");

if(bookmarkIcon){ //prüft ob BookmarkIcon existiert
    bookmarkIcon.addEventListener("click", () => {
        bookmarkIcon.classList.toggle("ph");
        bookmarkIcon.classList.toggle("ph-fill");
        bookmarkIcon.classList.toggle("active");
    })
}
// Answer-Button:

const answerButton = document.querySelector(".questioncard__button");  //selected den Button
const answer = document.querySelector(".questioncard__answer"); //selected die Antwort und speichert Element in answer

if (answerButton && answer) {
    answerButton.addEventListener("click", () => {
        answer.classList.toggle("questioncard__answer--hidden");

        if (answer.classList.contains("questioncard__answer--hidden")){
            answerButton.textContent ="show answer";
        } else {
            answerButton.textContent ="hide answer";
        }});
    }