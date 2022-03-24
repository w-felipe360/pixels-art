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
let cubos = document.getElementsByClassName('pixel')


window.onload

preto.classList.add('selected');

for(let index = 0; index < cores.length; index++){

cores[index].addEventListener('click', selecionaCor);}
function selecionaCor(event) {
    
    for (let index = 0; index < cores.length; index += 1) {
        if (cores[index].className.includes('selected')) {
            cores[index].classList.remove('selected')


        }
        
    }
event.target.classList.add('selected')
}
for(let index2 = 0; index2 < cubos.length; index2++)
cubos[index2].addEventListener('click', colocaCor)
function colocaCor(event){
    if (document.getElementById("black").className.includes('selected')){
        event.target.classList.add('blackme') 
        event.target.classList.remove('blueme') 
        event.target.classList.remove('redme') 
        event.target.classList.remove('greenme') 
    } else if (document.getElementById("green").className.includes('selected')){
        event.target.classList.add('greenme')
        event.target.classList.remove('redme') 
        event.target.classList.remove('blackme') 
        event.target.classList.remove('blueme') 
    }
        else if (document.getElementById("red").className.includes('selected')){
            event.target.classList.add('redme')
            event.target.classList.remove('blueme') 
            event.target.classList.remove('greenme') 
            event.target.classList.remove('blackme') 
        }
            else if (document.getElementById("blue").className.includes('selected')){
                event.target.classList.add('blueme')
        event.target.classList.remove('redme') 
        event.target.classList.remove('blackme') 
        event.target.classList.remove('greenme') 
    }
        
    

}

