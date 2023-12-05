document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("main");
    const ctx = canvas.getContext("2d");
    let isPainting = false;
    let brushColor = "#000000"; // Default black color
    let brushSize = 2; // Default brush size
  
    // Function to set brush color
    function setColor(color) {
      brushColor = color;
    }
  
    // Function to set brush size
    function setBrushSize(size) {
      brushSize = size;
      document.getElementById("brushSize").textContent = size;
    }
  
    // Clear canvas function
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    // Event listeners for brush color buttons
    document.getElementById("black").addEventListener("click", function() {
      setColor("#000000");
    });
    document.getElementById("pink").addEventListener("click", function() {
      setColor("#F50057");
    });
    document.getElementById("blue").addEventListener("click", function() {
      setColor("#2979FF");
    });
    document.getElementById("yellow").addEventListener("click", function() {
      setColor("#FFD600");
    });
  
    // Event listener for eraser button
    document.getElementById("erase").addEventListener("click", function() {
      setColor("#FFFFFF"); // Set color to white for erasing
    });
  
    // Event listener for brush size slider
    document.getElementById("slider").addEventListener("input", function() {
      setBrushSize(this.value);
    });
  
    // Event listeners for mouse actions on canvas
    canvas.addEventListener("mousedown", function(e) {
      isPainting = true;
      draw(e);
    });
  
    canvas.addEventListener("mousemove", function(e) {
      if (isPainting) {
        draw(e);
      }
    });
  
    canvas.addEventListener("mouseup", function() {
      isPainting = false;
      ctx.beginPath();
    });
  
    function draw(e) {
      if (!isPainting) return;
  
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.strokeStyle = brushColor;
  
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    // Event listener for clear button
    document.getElementById("new").addEventListener("click", function() {
      clearCanvas();
    });
  });
  