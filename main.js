
const contenitore = document.getElementById('container');





const button = document.getElementById('btn')

button.addEventListener("click"){
    for(let i = 0; i < 100; i++){
        const quadratino = creaQuadrato();
    
        contenitore.append(quadratino);
    }
    
    function creaQuadrato(){
        const quadrato = document.createElement('div');
        quadrato.classList.add('blocco');
        return quadrato;
    }
}