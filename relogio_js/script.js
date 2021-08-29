function horaAtual() {
    camada = document.getElementById('relogio');
    hoje = new Date();
    hora = hoje.getHours();
    
    if(hora <= 9) {
        hora = '0' + hora;
    }
    
    minuto = hoje.getMinutes();
    if(minuto <= 9) {
        minuto = '0' + minuto;
    }

    segundo = hoje.getSeconds();
    if(segundo <= 9) {
        segundo = '0' + segundo;
    }

    camada.innerHTML = hora + ':' + minuto + ':' + segundo;
    setTimeout('horaAtual()', 1000);
}