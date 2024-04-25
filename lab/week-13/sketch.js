function setup() {
    createCanvas(400, 400);
    noLoop(); 
  }
  
  function draw() {
    background(220); 
  
    
    let centerX = width / 2;
    let centerY = height / 2 - 50;
  
    // head and facial features
    fill(255, 224, 189); // Skin color
    ellipse(centerX, centerY, 60, 80); // Head
    
    // Eyes
    fill(0);
    ellipse(centerX - 15, centerY - 10, 8, 16); // Left eye
    ellipse(centerX + 15, centerY - 10, 8, 16); // Right eye
    
    // Nose
    noFill();
    beginShape();
    vertex(centerX, centerY);
    vertex(centerX + 5, centerY + 10);
    vertex(centerX, centerY + 10);
    endShape();
    
    // Mouth
    fill(255, 105, 97); // Lip color
    arc(centerX, centerY + 20, 30, 10, 0, PI);
    
    // Body
    fill(70, 130, 180); // Shirt color
    rect(centerX - 30, centerY + 40, 60, 100); // Torso
  
    // Arms
    strokeWeight(10);
    line(centerX - 30, centerY + 60, centerX - 70, centerY + 30); // Left arm
    line(centerX + 30, centerY + 60, centerX + 70, centerY + 30); // Right arm
    
    // Legs
    stroke(0);
    strokeWeight(8);
    line(centerX - 15, centerY + 140, centerX - 20, centerY + 190); // Left leg
    line(centerX + 15, centerY + 140, centerX + 20, centerY + 190); // Right leg
  }
  
  