
## General
[List of all Mathematical Symbols - As a PDF document download](http://www.geocities.ws/cm1370/Chandan%20Mandal%2011.pdf)

## Percentage

```javascript
function getHealth(maxHealth, currentHealth) {
  return (currentHealth/maxHealth) * 100;
}

console.log(getHealth(200, 150));
```

## Trigonometry

- [Basic Trigonometry - NancyPI](https://youtu.be/bSM7RNSbWhM)

### The Unit Circle

- [How to remember the Unit Circle (NancyPI)](https://www.youtube.com/watch?v=c819bGfH8FA)
- [Trigonometry - The Unit Circle (43 min)](https://www.youtube.com/watch?v=593w799sBms)
  - [Explaining Radians](https://youtu.be/593w799sBms?t=297)
  - [More on Radians](https://youtu.be/593w799sBms?t=526)
```
SOH-CAH-TOA
(Some Old Hag Caught Another Hag Tripping On Acid)
```

sin = opposite/hypotoneuse
cos = adjacent/hypotoneuse
tan = opposite/adjacent

cosec = 1/sin
sec = 1/cos
cot = 1/tan

### Convert between Degrees and Radians

```javascript
radians = degrees * Math.PI / 180;

degrees = radians * 180 / Math.PI;
```

### Calculating sin, cos, and tan

Remember to convert radians. Feed in the angle, and you get back a ratio.
```javascript
var sinTheta = Math.sin(-30 * Math.PI / 180)
console.log(sinTheta)

var toRadians = (deg) => deg * Math.PI / 180; 

var cosTheta = Math.cos(toRadians(-30));
console.log(cosTheta);

var tanTheta = Math.tan(toRadians(-30));
console.log(tanTheta);
```
### Calculating Arcsine, Arccosine, and Arctangent
Given a ratio of two sides, calculate the angle (theta).

```javascript
console.log(Math.asin(0.5) * 180 / Math.PI);
console.log(Math.acos(0.865) * 180 / Math.PI);
console.log(Math.atan(0.577) * 180 / Math.PI);
```

[JavaScript Tutorial 6 Canvas API Trigonometry](https://www.youtube.com/watch?v=GDTHmH9mZWA)