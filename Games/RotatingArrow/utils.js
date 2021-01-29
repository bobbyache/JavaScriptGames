var utils = {};

console.log('Successfully reading utils.js file!');

utils.prepareFrames = function() {
    if (!window.requestAnimationFrame) {
        console.log('Connecting to compatible frame worker');
        window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000/60);
        });
    }
}

utils.captureMouse = function (element) {
    var mouse = {x: 0, y: 0};

    element.addEventListener('mousemove', function(event) {
        var x, y;

        if (event.pageX) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollRight + document.documentElement.scrollRight;
        }

        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    }, false);

    return mouse;
}
