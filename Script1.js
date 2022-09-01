
randomPlayer1 = Math.random() * 6;
randomP1 = Math.ceil(randomPlayer1);
randomPlayer2 = Math.random() * 6;
randomP2 = Math.ceil(randomPlayer2);

if (randomP1 < randomP2) {
    document.querySelector("h1.main").textContent = "Player 2 wins";
    
}


else {
    if (randomP1 > randomP2) {
        document.querySelector("h1.main").textContent = "Player 1 wins";
    }
    else {
        document.querySelector("h1.main").textContent = "Draw";
    }
}


setImage = "Images/dice" + randomP1 + ".png";
document.querySelector("img.p1").setAttribute("src", setImage);

setImage = "Images/dice" + randomP2 + ".png";
document.querySelector("img.p2").setAttribute("src", setImage);


