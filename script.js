let cores = document.getElementsByClassName('color')
let preto = document.getElementById("black");
function quadrados() {

    let pai = document.getElementById('pixel-board');
    for (let i = 0; i <= 24; i++) {

        let elementos = document.createElement('div');
        elementos.className = 'pixel'
        pai.appendChild(elementos);
    }
}
quadrados();



window.onload

preto.classList.add('selected');

for(let index = 0; index < cores.length; index++)

cores[index].addEventListener('click', selecionaCor);
function selecionaCor(event) {
    
    for (let index = 0; index < cores.length; index += 1) {
        if (cores[index].className.includes('selected')) {
            cores[index].classList.remove('selected')


        }
        
    }
event.target.classList.add('selected')
}
