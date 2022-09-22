function contar() {
    var inicio = window.document.getElementById('iinicio')
    var fim = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')
    res.innerHTML = ''
    Number(inicio = Number(inicio.value))
    Number(fim = Number(fim.value))
    Number(passo = Number(passo.value))
    for (; inicio <= fim; inicio += passo) {
        res.innerHTML += `Contando:<br> ${inicio}`

    }
    res.innerHTML += `#U+1F3C1`

}