Ciao ragazzi,
Esercizio di oggi: *Griglia Campo Minato*
nome repo: *js-campominato-grid*
*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.
Numero di push: 15 circa
*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*Consigli del giorno:*  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


SUDDIVIDO IL PROBLEMA IN SOTTOPROBLEMI

1 - Creo un Div e un button nell'html con id dove mettere la griglia dinamica
2 - In js Creo una function per generare i quadrati della griglia
3 - Recupero l'elemento che conterrà la griglia
4 - Recupero il button 
5 - Creo una function anonima per il click del button
6 - Do uno stile ai quadrati e alla griglia
7 - Creo un ciclo per creare la griglia
8 - Richiamo la funzione per creare quadrati 
9 - Aggiungo il testo all'interno dei quadrati
10 - Creo una function anonima per il click della cella
11 - Faccio stampare in console il numero della cella cliccato
12 - Appendo i quadrati nella griglia
