//selektiert das Formular und die Input-Felder

const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');

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
})

