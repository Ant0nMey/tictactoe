function createPlayer(playerName) {

    let name = playerName;
    let choix = [];

    return { name, choix };
};

function createGameboard() {

    let index = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

    return { index } ;

};

function choixPlayer(player) {

    let index = prompt(`${player.name}, choisissez une case \n| 0 | 1 | 2 |\n _ _ _ \n| 3 | 4 | 5 |\n _ _ _ \n| 6 | 7 | 8 | : `);
    player.choix.push(index);
};

function vérifierGagnant(player1, player2) {
    const combinaisonGagnante = {
        combinaison : [ 
            [ "0", "1", "2"],
            [ "3", "4", "5"],
            [ "6", "7", "8"],
            [ "0", "3", "6"],
            [ "2", "5", "8"],
            [ "6", "4", "2"],
            [ "0", "4", "8"],
            [ "1", "4", "7"]
        ]
    };
};

const gameboard = createGameboard();

const playerJosh = createPlayer("Josh");
const playerJean = createPlayer("Jean");

choixPlayer(playerJosh);
choixPlayer(playerJean);

console.log(`gameboard : ${gameboard.index[0]}`);

console.log(`playerJosh.name : ${playerJosh.name}`);
console.log(`playerJean.name : ${playerJean.name}`);

console.log(`Josh array : ${playerJosh.choix}`);
console.log(`Jean array : ${playerJean.choix}`);