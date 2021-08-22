window.onload = (event) => {
    alert('Olá, eu sou o Rocky.');
};

iRocky.addEventListener("click", () => {
    touchRocky();
});

function touchRocky() {
    let userName = prompt("Qual é o seu nome? Enter your name here.");

    if (userName != "") {
        alert('Prazer em conhecer você,' + userName + '.');
        iRocky.src = "image/rockhappy.png";
    } else {
        alert("Please, say your name.");
    }
}