
function quadrados(){
    
    let pai = document.getElementById('pixel-board');  
     for (let i = 0; i <= 24; i++){

        let elementos = document.createElement('div');
        elementos.className = 'pixel'
         pai.appendChild(elementos);
            }
}
quadrados();

   

window.onload
document.getElementById('black').classList.add('selected')
   