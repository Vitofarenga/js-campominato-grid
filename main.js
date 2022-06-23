
const contenitore = document.getElementById('grid-container');



for(let i = 1; i == 1; i++){
    const quadratoG = creaQuadrato();

    contenitore.append(quadratoG);
}

function creaQuadrato(){
    const quadrato = document.createElement('div');
    quadrato.classList.add('container');
    return quadrato;
}