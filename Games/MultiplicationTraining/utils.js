


document.addEventListener('click', () => {
    newSum();
})

function newSum() {
    let num_1 = randomInt(6, 8);
    let num_2 = randomInt(3, 12);
    
    let display = `${num_1} x ${num_2}`;
    let displayElement = document.getElementById('question');
    displayElement.innerHTML = display;
    console.log(display);
    console.log(displayElement);
}

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}
