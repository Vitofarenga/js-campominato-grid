
const contenitore = document.getElementById('container');





for(let i = 0; i < 100; i++){
    const quadratino = creaQuadrato();

    contenitore.append(quadratino);

    quadratino.addEventListener('click', function(){
        quadratino.classList.toggle('green')
    })
}

const button = document.getElementById('btn');
function creaQuadrato(){
    const quadrato = document.createElement('div');
    quadrato.classList.add('blocco');
    return quadrato;
}

button.addEventListener('click', function(){
    creaQuadrato()
})
