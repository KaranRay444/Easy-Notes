document.addEventListener("DOMContentLoaded", function() {
    // Display current date and time
    function updateDateTime() {
        const dateTimeElement = document.getElementById('date-time');
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        dateTimeElement.textContent = formattedDate;
    }
    // Update date-time every second
    setInterval(updateDateTime, 1000);

    // Add event listener to Add Note button
    const addNoteButton = document.getElementById('add-note');
    addNoteButton.addEventListener('click', function() {
        const noteInput = document.getElementById('note-input').value;
        if (noteInput.trim() !== '') {
            addNoteToDisplay(noteInput);
            document.getElementById('note-input').value = ''; // Clear input field after adding note
        }
    });

    // Function to add a note to the display
    function addNoteToDisplay(note) {
        const writtenNotesContainer = document.getElementById('written-notes');
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.textContent = note;
        writtenNotesContainer.appendChild(noteElement);

        // Add delete and edit functionality to the note
        noteElement.addEventListener('click', function() {
            const action = prompt('Choose an action: \n1. Edit\n2. Delete');
            if (action === '1') {
                const editedNote = prompt('Edit note:', noteElement.textContent);
                if (editedNote !== null) {
                    noteElement.textContent = editedNote;
                }
            } else if (action === '2') {
                writtenNotesContainer.removeChild(noteElement);
            }
        });
    }
});
