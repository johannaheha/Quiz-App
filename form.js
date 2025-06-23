// Selektiert das Formular und die Input-Felder
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// Selektiere Felder und Zähler
const questionCounter = document.querySelector('[data-js="question-count"]');
const answerCounter = document.querySelector('[data-js="answer-count"]');

// Zähler-Logik, Funktion mit 3 Parameter
function handleCharacterCount(textareaElement, counterElement, maxLength) {
  textareaElement.addEventListener("input", () => {
    const remaining = maxLength - textareaElement.value.length;
    counterElement.textContent = `${remaining} characters left`;
  });
}
//Funktionsaufruf - function call

handleCharacterCount(questionInput, questionCounter, 150);
handleCharacterCount(answerInput, answerCounter, 150);

// EventListener fürs Absenden des Formulars
form.addEventListener("submit", (event) => {
  event.preventDefault(); // verhindert das Neuladen

  // Werte auslesen, speichert den Text in einer neuen Variable 
  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  // Karte erzeugen
  const newCard = document.createElement("article");
  newCard.classList.add("questioncard");
  newCard.innerHTML = `
    <h2 class="questioncard__question">${question}</h2>
    <button class="questioncard__button" data-js="toggle-answer" aria-label="show answer">show answer</button>
    <p class="questioncard__answer questioncard__answer--hidden" data-js="card-answer">${answer}</p>
    <i class="questioncard__bookmark ph ph-bookmark-simple" data-js="bookmark-icon"></i>
    <ul class="questioncard__categories">
      <li class="questioncard__category-item">${tag}</li>
    </ul>
  `;

  // Toggle-Funktion für Antwort
  const answerButton = newCard.querySelector('[data-js="toggle-answer"]');
  const answerText = newCard.querySelector('[data-js="card-answer"]');

  answerButton.addEventListener("click", () => {
    answerText.classList.toggle("questioncard__answer--hidden");
    answerButton.textContent = answerText.classList.contains("questioncard__answer--hidden")
      ? "show answer"
      : "hide answer";
  });

  // Toggle-Funktion für Bookmark
  const bookmarkIcon = newCard.querySelector('[data-js="bookmark-icon"]');
  bookmarkIcon.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("ph-fill");
  });

  // In <li> einfügen und zur Seite hinzufügen
  const listItem = document.createElement("li");
  listItem.appendChild(newCard);
  cardContainer.appendChild(listItem);

  // Formular und Zähler zurücksetzen
  form.reset();
  questionCounter.textContent = "150 characters left";
  answerCounter.textContent = "150 characters left";
});
