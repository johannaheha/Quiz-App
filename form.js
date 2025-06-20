//selektiert das Formular und die Input-Felder

const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

//EventListener fürs Absenden des Formulars

form.addEventListener("submit", (event) => {
    event.preventDefault(); //verhindert das Neuladen

    //Werte auslesen
    const question = questionInput.value;
    const answer = answerInput.value;
    const tag = tagInput.value;

    //Werte ausgeben (zum Testen)
    console.log("Question:", question);
    console.log("Answer:", answer);
    console.log ("Tag:", tag);
    
    // Karte erzeugen
    
    const newCard = document.createElement("article");
    newCard.classList.add("questioncard");
    newCard.innerHTML = `<h2 class="questioncard__question">${question}</h2>
    <button class="questioncard__button" aria-label="show answer">show answer</button>
    <p class="questioncard__answer questioncard__answer--hidden">${answer}</p>
    <i class="questioncard__bookmark ph ph-bookmark-simple"></i>
    <ul class="questioncard__categories">
    <li class="questioncard__category-item">${tag}</li>
    </ul>`;
    
    // Karte einfügen
    
    cardContainer.appendChild(newCard);
      form.reset();
});