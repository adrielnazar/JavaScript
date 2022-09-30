let novonumero = window.document.getElementById('inumero')
let res = window.document.getElementById('res')////////////
let numeros = []

function adicionar() {
    

    if (novonumero.value == 0){
        window.alert('Valor invalido 1')

    } else{
        novonumero = Number(novonumero.value)
        let pos = numeros.indexOf(novonumero)
        if (pos != -1){
            window.alert('Valor é invalido ou já encontrado na lista')
        } else if (novonumero > 100 || novonumero < 1) {
            window.alert('Valor invalido 2')
            
        } else{
            
            numeros.push (novonumero) 
            res.innerHTML = (`${numeros[1]}`)    
        }

    }
    
    
}
