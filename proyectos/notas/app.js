document.addEventListener("DOMContentLoaded", function() {
    const newNoteBtn = document.getElementById("new-note-btn");
    const notesList = document.getElementById("notes-list");
    const noteTitle = document.getElementById("note-title");
    const noteText = document.getElementById("note-text");

    newNoteBtn.addEventListener("click", createNewNote);

    function createNewNote() {
        const noteItem = document.createElement("li");
        noteItem.textContent = "Nueva Nota";
        noteItem.addEventListener("click", () => selectNote(noteItem));
        notesList.appendChild(noteItem);
        selectNote(noteItem);
    }

    function selectNote(noteItem) {
        const selectedNote = document.querySelector(".selected");
        if (selectedNote) {
            selectedNote.classList.remove("selected");
        }
        noteItem.classList.add("selected");
        noteTitle.value = noteItem.textContent;
        noteText.value = "";
        noteText.focus();
    }
});
