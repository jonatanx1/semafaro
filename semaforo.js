const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIdex = 0;
let intervalId = null;

const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nexIdex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const Colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearINterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changecolor, 1000 )
}

buttons.addEventListener('click', trafficLight );