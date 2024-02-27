/*var fadeText = document.getElementById('fadeText');

window.addEventListener('scroll', function() {
  var position = fadeText.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (position < windowHeight * 0.75) {
    fadeText.classList.add('fade-out-hidden');
    // Scroll down to the bottom of the page when the text fades out completely
    if (!fadeText.classList.contains('fade-out-hidden')) {
      setTimeout(function() {
        // Scroll to the bottom of the page
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth' // Optional: Smooth scrolling effect
        });
        // After scrolling, navigate to the next HTML page
        setTimeout(function() {
          window.location.href = "main.html"; // Replace "newpage.html" with the filename of your desired next HTML file
        }, 1000); // Adjust the timeout value as needed to match the duration of the fade-out transition
      }, 1000); // Adjust the timeout value as needed to match the duration of the fade-out transition
    }
  } else {
    fadeText.classList.remove('fade-out-hidden');
  }
});

window.addEventListener('wheel', function(event) {
  var position = fadeText.getBoundingClientRect().top;
  const deltaY = event.deltaY;
  if (deltaY > 0) {
    // Scrolling down
    window.location.href = 'main.html';
  }
});
*/

var fadeText = document.getElementById('fadeText');

window.addEventListener('wheel', function(event) {
  var position = fadeText.getBoundingClientRect().top;
  const deltaY = event.deltaY;
  if (deltaY > 0) {
    // Scrolling down
    fadeText.classList.add('hidden'); // Apply the 'hidden' class to fade out the text
    setTimeout(function() {
      window.location.href = 'main.html'; // Navigate to the next page after the text fades out
    }, 500); // Adjust the timeout to match the transition duration
  }
});