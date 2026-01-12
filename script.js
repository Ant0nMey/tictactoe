function createPlayer() {

    let name = '';
    const setName = () => { name = prompt("Entrez un nom d'utilisateur")};

    return { name, setName };
};

const player = createPlayer();
player.setName();

console.log(player);
