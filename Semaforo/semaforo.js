const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLight = ( event ) => { 

    turon[event.target.id]();
}

const turon = {
    'red':       () => img.src = './img/red.png',
    'yellow':    () => img.src = './img/yellow.png',
    'green':     () => img.src = './img/green.png'
    
}


buttons.addEventListener('click', trafficLight);