function tabuada() {
    var numero = window.document.getElementById('inumero')
    var res = window.document.getElementById('ires')
    numero = Number(numero.value)
    res.innerHTML = ''
    for (var multiplicador = 1; multiplicador <= 10 ; multiplicador++) {
        res.innerHTML += (`${numero} X ${multiplicador} = ${multiplicador*numero}<br>`)
    }
}