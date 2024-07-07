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

    // ESEGUO UN CICLO PER CREARE LA GRID
    for(let i = 0; i < 100; i++){
    
        // RICHIAMO LA FUNZIONE
        let square = createSquare();
    
        // NUMERO PROGRESSIVO
        square.innerText = i + 1;

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
})