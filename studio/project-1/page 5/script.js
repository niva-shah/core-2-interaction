document.getElementById('reveal-btn').addEventListener('click', revealSecret);

function revealSecret() {
    var secretDiv = document.getElementById('secret');
    secretDiv.classList.remove('hidden');
}
