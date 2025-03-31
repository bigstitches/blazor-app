// Variables to track the last position and drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function initializeCanvas() {
    const canvas = document.getElementById('myCanvas');
    if (!canvas) {
        //console.error("Canvas not found!");
        return;
    }
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startDrawing(x, y) {
    //console.log("Start Drawing at:", x, y);

    isDrawing = true; // Enable drawing mode
/*    Console.WriteLine("drawing");*/
    let lastX = x;
    let lastY = y;
}

function stopDrawing() {
/*    Console.WriteLine("Not drawing");*/
    isDrawing = false; // Disable drawing mode
}

function drawContinuousLine(color, x, y) {
    //console.log("Drawing Line:", color, x, y);

    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext && isDrawing) { // Only draw if the mouse is pressed
        var ctx = canvas.getContext('2d');

        ctx.beginPath();

        if (lastX == 0 && lastY == 0) {
            lastX = x;
            lastY = y;
        }
        ctx.moveTo(lastX, lastY); // Start from the last recorded position
        ctx.lineTo(x, y); // Draw to the current position
        ctx.strokeStyle = color; // Set line color
        ctx.lineWidth = 2; // Set line thickness
        ctx.stroke(); // Render the line
        ctx.closePath();

        // Update the last position to the current one
        lastX = x;
        lastY = y;
    }
}


//function drawShapesOnCanvas() {
//    var canvas = document.getElementById('myCanvas');
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');

//        // Clear the canvas
//        ctx.clearRect(0, 0, canvas.width, canvas.height);

//        // Draw a rectangle
//        ctx.fillStyle = 'green';
//        ctx.fillRect(10, 10, 150, 100);

//        // Draw a circle
//        ctx.beginPath();
//        ctx.arc(300, 200, 50, 0, Math.PI * 2, true);
//        ctx.fillStyle = 'blue';
//        ctx.fill();
//    }
//}

//function outlineCanvas(color, x, y) {
//    var canvas = document.getElementById('myCanvas');
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//        ctx.beginPath(); // Start a new path
//        ctx.arc(x, y, 5, 0, Math.PI * 2); // Draw the circle
//        ctx.fillStyle = color; // Set the circle color
//        ctx.fill(); // Fill the circle
//        ctx.closePath(); // Close the path
//    }
//}

function eraseOnCanvas() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        lastX = 0;
        lastY = 0;
        var ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
