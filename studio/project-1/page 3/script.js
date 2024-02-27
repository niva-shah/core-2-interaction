let currentIndex = 0;
const texts = document.querySelectorAll('.text');

showText(currentIndex);

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    showText(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % texts.length;
    showText(currentIndex);
});

function showText(index) {
    texts.forEach((text, i) => {
        if (i === index) {
            text.style.display = 'block';
        } else {
            text.style.display = 'none';
        }
    });
}
