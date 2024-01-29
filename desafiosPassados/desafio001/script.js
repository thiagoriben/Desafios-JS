function descobrir() {
    var paisdenascimento = window.document.querySelector('input#paísnasc').value;
    var res = window.document.querySelector('div#resultado')

    if (paisdenascimento.toLowerCase() === 'brasil') { 
        res.innerHTML = 'Você é brasileiro.'
    } else {
        res.innerHTML = 'Você é estrangeiro.'
    }
}