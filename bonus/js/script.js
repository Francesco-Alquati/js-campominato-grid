// FUNZIONE CHE CREA I QUADRATI DELLA GRIGLIA
function createSquare(num, sideNumber){

    // CREO IL SINGOLO QUADRATO 
    const square = document.createElement('div');

    // AGGIUNGO LA CLASSE SQUARE
    square.classList.add('square');

    // DETERMINO LA W E LA H DEL QUADRATO
    let sideLength = `calc(100% / ${sideNumber})`;
    square.style.width = sideLength;
    square.style.height = sideLength;

    // NUMERO PROGRESSIVO
    square.innerText = num + 1;

    // RESTITUISCO IL QUADRATO
    return square;
}

// DEFINIZIONE FUNZIONE CHE MI GENERA LA GRIGLIA
function generateGrid(cellsNumber, sideNumber) {

    // RECUPERO L'ELEMENTO CHE CONTERRà LA GRID
    const grid = document.getElementById('grid');

    // ESEGUO UN CICLO PER CREARE LA GRID
    for(let i = 0; i < cellsNumber; i++){
        
        // RICHIAMO LA FUNZIONE
        let square = createSquare(i, sideNumber);

        // AGGIUNGO EVENTO CLICK ALLA CELLA
        square.addEventListener('click', function() {

        // AGGIUNGO LA CLASSE AL CLICK 
        this.classList.toggle('clicked');

        // STAMPO LA CELLA CLICCATA
        console.log(`cella cliccata: ${i + 1}`);

        });

        // APPENDO IL QUADRATO NELLA GRID
        grid.append(square);
    }
}

function createNewGame() {

    // RECUPERO IL LIVELLO DI DIFFICOLTA
    let difficulty = parseInt(document.getElementById('difficulty').value);
    
    if (difficulty != '') {

        // VALUTARE IL VALORE DI DIFFICOLTà, IN BASE AL VALORE AVRò UN NUMERO DI CASELLE PER LATO DIFFERENTE
        let totalCells; 
        let sideCells;

        // SWITCH PER DETERMINARE I VALORI DELLE DUE VARIABILI SOPRA
        switch (difficulty) {
            case 1:
                totalCells = 100;
                sideCells = 10;
                break;
            case 2:
                totalCells = 81;
                sideCells = 9;
                break;
            case 3:
                totalCells = 49;
                sideCells = 7;
                break;
            default:
                console.log('difficoltà non selezionata')
        }

        // DOBBIAMO GENERARE LE CASELLE
        generateGrid(totalCells, sideCells);
        
    }
    else {
        alert("difficoltà non selezionata");
    }

   
}


// RECUPERO IL BUTTON
const btn = document.getElementById('start');

// FUNZIONE ANONIMA PER IL BUTTON
btn.addEventListener('click', function(){

    // CHIAMO LA FUNZIONE CHE MI FA COMINCIARE LA PARTITA
    createNewGame();
})