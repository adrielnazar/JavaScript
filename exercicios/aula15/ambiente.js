let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()


console.log(`O vetor tem ${num.length} elementos`)
console.log(`Nosso vetor tem os valores ${num}`) 

for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor está na posição ${pos}`)
}