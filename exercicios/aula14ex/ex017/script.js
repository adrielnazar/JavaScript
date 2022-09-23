function tabuada() {
    var res = window.document.getElementById('ires')
    var numero = window.document.getElementById('inumero')
    if (numero.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
    numero = Number(numero.value)
    res.innerHTML = ''
    for (var multiplicador = 1; multiplicador <= 10 ; multiplicador++) {
        let item = document.createElement('option')
        item.text = `${numero} X ${multiplicador} = ${multiplicador*numero}`
        item.value = `tab${multiplicador}`
        res.appendChild(item)
    }}
}