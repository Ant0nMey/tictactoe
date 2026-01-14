function isEven(n) {
   return n % 2 == 0;
}

function createPlayer(playerName, playerSymbol) {

    let name = playerName;
    let choix = [];
    let symbol = playerSymbol;
    let score = 0;

    return { name, choix, symbol, score };
};

function createGameboard() {
    let board = document.querySelector(".gridboard")
    let indexOfDiv = [];
    // Création de 9 éléments <div .carre id="i"> puis stockage des div dans indexOfDiv[].
    for (i = 0; i < 9; i++) {
    indexOfDiv[i] = document.createElement("div");
    indexOfDiv[i].className = "carre";
    indexOfDiv[i].setAttribute("id", i);
    board.appendChild(indexOfDiv[i]);
    }
    return indexOfDiv;

};

function play(player1, player2) {

    // Initialisation de l'affichage : "Au tour du joueur 1".
    let texte = document.querySelector(".texte");
    texte.innerHTML = `<p>Au tour de <strong>${player1.name}</strong> (<strong>${player1.symbol}</strong>)`;

    // Utilisation d'un counter permettant de changer de joueur à chaque tour.
    let counter = 0;
    let gagnant = false;

    // On itaire sur toutes les cases à l'aide de l'id des cases : i = <div id=[i]>.
    for (let i = 0; i < 9; i++) {
        // Créer un listener sur chaque carré de mon gameboard.
        let divTest = document.getElementById(i);
        divTest.addEventListener('click', () => {

            // Empécher le click lorsque toutes les cases ont été cochées ( 9 cases au total ).
            if (counter === 9) { return;}

            // Empécher le click sur un case qui a déja était sélectionnée.
            if (divTest.textContent !== "") return;
            
            // Empécher le click lorsqu'un joueur a gagné la partie.
            if (gagnant) return;

            let index = divTest.getAttribute("id");

             /* La selection d'une case par un joueur :
                - push l'id de la case dans le tableau choix[] du joueur.
                - Ecrit le symbole du joueur dans la case.
                - Indique au joueur suivant de jouer.
            */            
            if (isEven(counter)) {

                console.log(`tour joueur : ${player1.name}`);
                player1.choix.push(index)
                divTest.textContent = player1.symbol;
                texte.innerHTML = `<p>Au tour de <strong>${player2.name}</strong> (<strong>${player2.symbol}</strong>)`;
            } else {
                console.log(`tour joueur : ${player2.name}`);
                player2.choix.push(index)
                divTest.textContent = player2.symbol;
                texte.innerHTML = `<p>Au tour de <strong>${player1.name}</strong> (<strong>${player1.symbol}</strong>)`;
            };
            if (verifierGagnant(player1) || verifierGagnant(player2)) return gagnant = true;

            counter++;

            if (counter === 9) {
            texte.innerHTML = "<p>Match nul !</p>";
            };
        ;})

    };

};

function verifierGagnant(player) {

    const combinaisonGagnante = [ 
            [ "0", "1", "2"],
            [ "3", "4", "5"],
            [ "6", "7", "8"],
            [ "0", "3", "6"],
            [ "2", "5", "8"],
            [ "6", "4", "2"],
            [ "0", "4", "8"],
            [ "1", "4", "7"]
        ]

    let gagnant = false;
    for (let combinaison of combinaisonGagnante) {
        gagnant = true;
        let counter = 0;
        let arrTemporaire = [];
            for (i = 0; i < player.choix.length; i++) {
                if ( combinaison.includes(player.choix[i]) && arrTemporaire.includes(player.choix[i]) == false) {
                    arrTemporaire.push(player.choix[i]);
                    counter++;
                    if (counter == 3) {
                        let texte = document.querySelector(".texte");
                        texte.innerHTML = `<p><strong>${player.name}</strong> a gagné ! `;
                        gagnant = true;
                        console.log(`${player.name} à gagné.`)
                        console.log(`combinaison gagnante : ${combinaison}.`);
                        player.score++;
                        console.log(`${player.name} score : ${player.score}`);
                        return gagnant
                    }
                    else {
                         continue;
                    }
                }
            }
        };
    };
     

let start = document.querySelector(".start")
let playerName1 = document.getElementById("name1").value
let playerName2= document.getElementById("name2").value 
const player1 = createPlayer(playerName1, "X");
const player2 = createPlayer(playerName2, "O");

start.addEventListener('click', () => {
    
    let playerName1 = document.getElementById("name1").value
    let playerName2= document.getElementById("name2").value 
    
    if (!(player1.name == playerName1 && player2.name == playerName2)){
        player1.name = playerName1
        player2.name = playerName2
        player1.score = 0;
        player2.score = 0;
    }


    player1.choix = [];
    player2.choix = [];
    if (!document.querySelector(".carre")) {
    gameboard = createGameboard();
    }
    if (document.querySelector(".carre")) {
        document.querySelectorAll(".carre").forEach(e => e.remove());
        gameboard = createGameboard();
        console.log('[+] Création de la gameboard');
    }

    console.log(`gameboard.indexOfDiv : ${gameboard}`);

    play(player1, player2);
});