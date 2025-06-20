// Bookmark-Toggle für das erste Bookmark

const bookmarkIcon = document.querySelector(".questioncard__bookmark");

if(bookmarkIcon){ //prüft ob BookmarkIcon existiert
    bookmarkIcon.addEventListener("click", () => {
        bookmarkIcon.classList.toggle("ph");
        bookmarkIcon.classList.toggle("ph-fill");
        bookmarkIcon.classList.toggle("active");
    })
}
