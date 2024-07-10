let num = [5 ,8 ,2 ,9 ,3]

num.push(1) //Acrescentando o valor 1

num.sort() //Colocando o vetor em ordem crescente

num.push(6) //Acrescentando o valor 6, no final do vetor organizado - O valor 6 vai ser acrescentado no final de tudo, sem ser em ordem crescente. Pois a sequencia em que os comando são dados importa!

console.log(num) //Mostrando o vetor

console.log(`Nosso vetor é o ${num}`) //Mostrando cada elemento do vetor

console.log(`O vetor tem ${num.length} posições`) // Quantas posições tem o vetor

console.log(`O primeiro valor no vetor é o ${num[0]}`) // Mostrando qual é o primeiro elemento no vetor

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição: ${pos}`)
}

