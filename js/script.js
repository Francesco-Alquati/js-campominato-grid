// FUNZIONE CHE CREA I QUADRATI DELLA GRIGLIA
function createSquare(){

    // CREO IL SINGOLO QUADRATO 
    let square = document.createElement('div');

    // AGGIUNGO LA CLASSE SQUARE
    square.classList.add('square');

    // RESTITUISCO IL QUADRATO
    return square;
}

// RECUPERO L'ELEMENTO CHE CONTERRà LA GRID
const grid = document.getElementById('grid');

// RECUPERO IL BUTTON
const btn = document.getElementById('start');

// FUNZIONE ANONIMA PER IL BUTTON
btn.addEventListener('click', function(){
    
})