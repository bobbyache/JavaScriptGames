
// Source: https://www.youtube.com/watch?v=GDTHmH9mZWA

const RADIUS = 200;
const CENTER = 300;
const X_CIRCLE_CENTER = CENTER;
const Y_CIRCLE_CENTER = CENTER;
const LINE_COLOR = '#839192';
const LINE_WIDTH = 1;

let canvas;
let ctx

class MousePosition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let mousePos = new MousePosition(0, 0);

document.addEventListener('DOMContentLoaded', setupCanvas);

function setupCanvas(){
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    drawCanvas();
    canvas.addEventListener('mousemove', redrawCanvas);
}

function drawCanvas(){
    drawRectangle(LINE_COLOR, LINE_WIDTH, 0, 0, 600, 600);
    drawCircle(LINE_COLOR, LINE_WIDTH, X_CIRCLE_CENTER, Y_CIRCLE_CENTER, RADIUS, 0, 2 * Math.PI)
    drawLine(LINE_COLOR, LINE_WIDTH, X_CIRCLE_CENTER, 0, X_CIRCLE_CENTER, 600);
    drawLine(LINE_COLOR, LINE_WIDTH, 0, Y_CIRCLE_CENTER, 600, Y_CIRCLE_CENTER);
}

function redrawCanvas(evt){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCanvas();
    getMousePosition(evt);
    drawTextAtPoint('X: ' + mousePos.x, 15, 25);
    drawTextAtPoint('Y: ' + mousePos.y, 15, 45);

    // A Lesson in Trigonometry at this point: https://youtu.be/GDTHmH9mZWA?t=1508
    let angleOfMouseDegrees = getAngleUsingXAndY(mousePos.x, mousePos.y);
    drawTextAtPoint('Degrees: ' + angleOfMouseDegrees, 15, 65);
    drawTriangle(angleOfMouseDegrees);
}

function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY){
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(startX, startY, endX, endY);
}

function drawCircle(strokeColor, lineWidth, xCircCenter, yCircCenter, radius, arcStart, arcEnd){
    // arcStart and arcEnd are angles...
    // arcStart will be 0
    // arcEnd will be 2(Math.PI) which is = 360 degrees!
    ctx.strokeStyle = strokeColor;
    
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.arc(xCircCenter, yCircCenter, radius, arcStart, arcEnd)
    ctx.stroke();
}

function drawTriangle(angleInDegrees){
    ctx.moveTo(X_CIRCLE_CENTER, Y_CIRCLE_CENTER);
    // Cosine = Adjacent / Hypotoneuse
    let xEndpoint = X_CIRCLE_CENTER + RADIUS * Math.cos(degreesToRadians(angleInDegrees));
    let yEndpoint = Y_CIRCLE_CENTER + RADIUS * -(Math.sin(degreesToRadians(angleInDegrees)));

    drawTextAtPoint('Radians: ' + degreesToRadians(angleInDegrees).toFixed(2), 15, 85);
    ctx.lineTo(xEndpoint, yEndpoint);
    ctx.stroke();
    ctx.lineTo(xEndpoint, yEndpoint);
    ctx.lineTo(xEndpoint, 300);
    ctx.stroke();
    drawTextAtPoint(`(${xEndpoint.toFixed(2)}, ${yEndpoint.toFixed(2)})`, xEndpoint + 10, yEndpoint - 10);

    let hypotenuseLength = getLineLength(X_CIRCLE_CENTER, Y_CIRCLE_CENTER, xEndpoint, yEndpoint);
    drawTextAtPoint("Hyp Len: " + hypotenuseLength.toFixed(2), 15, 105);

    let oppositeLength = getLineLength(xEndpoint, yEndpoint, xEndpoint, 300);
    drawTextAtPoint("Opp Len: " + oppositeLength.toFixed(2), 15, 125);
}


function drawLine(strokeColor, lineWidth, startX, startY, endX, endY){
    ctx.beginPath()
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawTextAtPoint(text, x, y){
    ctx.font = '15px Arial';
    ctx.fillText(text, x, y);
}

function getMousePosition(evt){
    let canvasDimensions = canvas.getBoundingClientRect();
    mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
    mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);
    mousePos.x -= CENTER;
    mousePos.y = -1 * (mousePos.y - CENTER);
    return mousePos;
}

function getAngleUsingXAndY(x, y){
    let adjacent = x;
    let opposite = y;

    return radiansToDegrees(Math.atan2(opposite, adjacent));
}

function radiansToDegrees(rad){
    if (rad < 0) {
        return (360.0 + (rad * (180/Math.PI))).toFixed(2);
    }
    else {
        return (rad * (180/Math.PI)).toFixed(2);
    }
}

function degreesToRadians(degrees){
    return degrees * (Math.PI / 180);
}

function getLineLength(x1, y1, x2, y2) {
    let xS = x2 - x1;
    xS = xS * xS
    let yS = y2 - y1;
    yS = yS * yS

    return Math.sqrt(xS + yS);
}
