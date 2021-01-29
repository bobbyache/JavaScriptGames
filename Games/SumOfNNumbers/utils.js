var utils = {};

const MARGIN = 5;
const LENGTH = 100;

console.log('Successfully reading utils.js file!');

utils.drawSquare = function (ctx, leftX, topY) {
    ctx.fillStyle = 'black';
    ctx.fillRect(leftX, topY, LENGTH, LENGTH);
    ctx.fillStyle = 'red';
    ctx.fillRect(leftX + MARGIN, topY + MARGIN, LENGTH - 2 * MARGIN, LENGTH - 2 * MARGIN);
}