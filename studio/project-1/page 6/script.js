const beginnings = [
    "In the quiet of dawn,",
    "Amidst the chaos of the city,",
    "Underneath the starlit sky,",
    "In the heart of a bustling marketplace,",
    "By the edge of the tranquil river,",
  ];
  
  const endings = [
    "we find solace in our shared dreams.",
    "we realize the beauty of fleeting moments.",
    "we embrace the uncertainty of the future.",
    "we understand the importance of letting go.",
    "we discover the meaning of true connection.",
  ];
  
  const beginningElement = document.getElementById('beginning');
  const endingElement = document.getElementById('ending');
  const generateBtn = document.getElementById('generateBtn');
  
  generateBtn.addEventListener('click', generatePoem);
  
  function generatePoem() {
    const randomBeginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];
  
    beginningElement.textContent = randomBeginning;
    endingElement.textContent = randomEnding;
  }
  