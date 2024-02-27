document.getElementById('generate-btn').addEventListener('click', generatePoem);

function generatePoem() {
    const phrase = document.getElementById('phrase-input').value.trim();
    if (!phrase) {
        alert("Please enter a phrase, line, or scrap of language.");
        return;
    }

    const poem = `
        <p>It all begins with ${phrase},</p>
        <p>As poets embark on their creative journey,</p>
        <p>Weaving words into verses,</p>
        <p>Each line a melody, each stanza a story,</p>
        <p>Born from the depths of imagination.</p>
    `;

    document.getElementById('poem').innerHTML = poem;
}
