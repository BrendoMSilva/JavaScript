function touchRocky() {
    var userName = prompt('Qual é o seu nome?', 'Enter your name here.');

    if (userName) {
        alert('Prazer em conhecer você,' + userName + '.');
        document.getElementById('rockImg').src = 'rockhappy.png';
    }
}