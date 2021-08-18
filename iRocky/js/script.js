function touchRocky() {
    var userName = prompt('Qual é o seu nome?', 'Enter your name here.');

    if (userName) {
        alert('Prazer em conhecer você,' + userNamae + '.');
        document.getElementById('rcckImg').src = 'rock_happy.png';
    }
}