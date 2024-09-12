function setup() {
    createCanvas(1000, 1000);
    background("yellow")
              
  }
  
  function draw() {
    stroke("#FF9800");
    fill("#FF9800");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }