
function quadrados(){
    
    let pai = document.getElementById('pixel-board');  
     for (let i = 0; i <= 24; i++){

        let elementos = document.createElement('div');
        elementos.className = 'pixel'
         pai.appendChild(elementos);
            }
}
quadrados();

   


// function quadrados(){
    
//     let pai = document.getElementById('listagem');  
    
//     for (let i = 0; i <= 25; i = 0){
//          let elementos = document.createElement('div');
//          pai[0].appendChild(elementos);
//          elementos.className = 'color'
//          console.log(i)
//      }
// }

   