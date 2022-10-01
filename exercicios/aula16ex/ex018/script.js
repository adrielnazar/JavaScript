let numeros = []
let conta = 0
let soma = 0
let res = window.document.getElementById('res')////////////

function adicionar() {
    let novonumero = window.document.getElementById('inumero')
    
    let itext = window.document.getElementById('itext')
    res.innerHTML = ''
    novonumero = Number(novonumero.value)
    let pos = numeros.indexOf(novonumero)
    if (pos != -1){
        window.alert('Valor é invalido ou já encontrado na lista')
    } else if (novonumero > 100 || novonumero < 1) {
        window.alert('Valor invalido')
        
    } else{
        let item = document.createElement('option')
        soma += novonumero
        numeros.push (novonumero)
        item.text = `Valor ${numeros[conta]} adicionado!`
        item.value = `tab${numeros[conta]}` 
        itext.appendChild(item)
        conta++
    }
}

function finalizar() {
    if (conta == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
    numeros.sort()
    res.innerHTML += (`<p>Ao todo, temos ${conta} números cadastrados.</p>
    <p>O maior valor informado foi ${numeros[conta -1]}.</p>
    <p>O menor valor informado foi ${numeros[0]}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${soma/conta}.</p>`)
    }
}