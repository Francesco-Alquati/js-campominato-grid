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