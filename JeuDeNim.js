function jdNPvP() {
    const player1 = document.getElementById("player1").value;
    const player2 = document.getElementById("player2").value;
    let sticks = 20;
    document.getElementById("askName").style.display = "none";
    document.getElementById("askName2").style.display = "none";
    document.getElementById("player1").style.display = "none";
    document.getElementById("player2").style.display = "none";
    document.getElementById("btnPvPID").style.display = "none";
    document.getElementById("askPlay").style.display = "block";
    document.getElementById("nextPlay").style.display = "block";
    document.getElementById("btnAskPlayPvP").style.display = "block";
    let currPlayer = player1;
    while (sticks != 0) {
        document.getElementById("flowOfGame").innerHTML = currPlayer;
        console.log(currPlayer);
    }
}

function askPlay(left) {
    let play = parseInt(prompt("Combien de bâtonnets désirez-vous prendre ? Il en reste " + left));
    if (play > 3 || play < 1 || play > left) {
        alert("Veuillez choisir un chiffre entre 1 et 3. Vous ne pouvez pas non plus prendre plus de bâtonnets qu'il n'en reste.")
        return askPlay(left);
    }
    else {
        return play;
    }
}