function drawOnCanvas() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw a rectangle
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);

        // Draw a circle
        ctx.beginPath();
        ctx.arc(300, 200, 50, 0, Math.PI * 2, true);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }
}

function eraseOnCanvas() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
