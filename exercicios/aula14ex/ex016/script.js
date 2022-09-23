function contar() {
    var inicio = window.document.getElementById('iinicio')
    var fim = window.document.getElementById('ifim')
    var passo = window.document.getElementById('ipasso')
    var res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = 'Contando: <br>'
        var contador = 0
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        contador = Number(inicio)
        if (passo <= 0) {
            passo = 1
            window.alert('Passo invalido! Considerando PASSO 1')
        }
        if (inicio < fim) {
            for (; inicio <= fim; inicio += passo) {
                res.innerHTML += ` ${inicio} \u{1F449}`
            }
        } else {
            for (; inicio >= fim; inicio -= passo) {
                res.innerHTML += ` ${inicio} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}