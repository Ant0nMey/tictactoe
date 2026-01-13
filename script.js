function isEven(n) {
   return n % 2 == 0;
}

function createPlayer(playerName, playerSymbol) {

    let name = playerName;
    let choix = [];
    let symbol = playerSymbol;

    return { name, choix, symbol };
};

function createGameboard() {
    let board = document.querySelector(".gridboard")
    let indexOfDiv = [];
    for (i = 0; i < 9; i++) {
    indexOfDiv[i] = document.createElement("div");
    indexOfDiv[i].className = "carre";
    indexOfDiv[i].setAttribute("id", i);
    board.appendChild(indexOfDiv[i]);
    }
    return indexOfDiv;

};

function play(player1, player2) {

    let counter = 0;
    let texte = document.querySelector(".texte");
    let gagnant1 = false;
    let gagnant2 = false;
    for (let i = 0; i < 9; i++) {

        let divTest = document.getElementById(i);
        divTest.addEventListener('click', () => {
            if (counter === 9) { return;}
            if (divTest.textContent !== "") return;
            if (gagnant1 === true || gagnant2 === true) return;
            console.log(`counter : ${counter}`);
            let index = divTest.getAttribute("id");

            console.log(`counter is even : ${isEven(counter)}`)
            if (isEven(counter)) {
                console.log(`boucle avec player 2:`);
                texte.innerHTML = `<p>Au tour de <strong>${player1.name}</strong>`;
                player2.choix.push(index)
                divTest.textContent = player2.symbol;
                console.log(`boucle avec player 2: player2.name : ${player2.name}`)
                gagnant1 = verifierGagnant(player2)
                console.log(`boucle avec player 2: gagnant1 : ${gagnant1}`)

            } else {
                console.log(`boucle avec player 1:`);
                texte.innerHTML = `<p>Au tour de <strong>${player1.name}</strong>`;
                player1.choix.push(index)
                divTest.textContent = player1.symbol;
                console.log(`boucle avec player 1: player1.name : ${player1.name}`)
                gagnant2 = verifierGagnant(player1)
                console.log(`boucle avec player 1: gagnant1 : ${gagnant2}`)
            }
            counter++;

            if (counter === 9) {
            texte.innerHTML = "<p>Match nul !</p>";
            }
            ;})
        console.log(`i : ${i}`);

    }
    
    /*intIndex = parseInt(index);
    console.log(`intIndex: ${intIndex}.`);
    gameboard[intIndex] = player.symbol; */
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
                        console.log(`combinaison gagnante : ${combinaison}.`)
                        return gagnant
                    }
                    else {
                         continue 
                    }
                }
            }
        };
    };
     

const gameboard = createGameboard();


let playerName1 = prompt("Entrez le nom du joueur 1") 
const player1 = createPlayer(playerName1, "X");

let playerName2= prompt("Entrez le nom du joueur 2") 
const player2 = createPlayer(playerName2, "O");

play(player1, player2);
 /*
let gagnant = false;
while (gagnant == false) {

choixPlayer(playerJosh, gameboard);
if (verifierGagnant(playerJosh) == true)
    break;
choixPlayer(playerJean, gameboard);
if (verifierGagnant(playerJean) == true)
    break;
}; */