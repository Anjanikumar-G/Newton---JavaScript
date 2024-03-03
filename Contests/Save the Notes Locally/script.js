// javascript code goes here
document.getElementById("saveButton").addEventListener("click", function () {
  let noteInput = document.getElementById("noteInput").value;
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteInput);
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("noteInput").value = "";
  displayNotes();
});
function displayNotes() {
  let noteList = document.getElementById("noteList");
  noteList.innerHTML = "";
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach(function (note, index) {
    let noteItem = document.createElement("div");
    noteItem.textContent = note;
    let loadButton = document.createElement("button");
    loadButton.textContent = "Load";
    loadButton.classList.add("load-button");
    loadButton.setAttribute("data-index", index);
    loadButton.addEventListener("click", function () {
      alert(note);
    });
    noteItem.appendChild(loadButton);
    noteList.appendChild(noteItem);
  });
}
displayNotes();
