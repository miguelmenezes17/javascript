var seq = [2, 6, 4, 8, 9, 4, 2, 4, 5] // Nos mostra o vetor
seq.sort() //Objetivo - Organizar o vetor em ordem crescente!
console.log(seq) // Escrece o vetor no terminal node.js
console.log(`Nosso vetor é o ${seq}`) // Diz-nos qual é o nosso vetor
console.log(`Quantas posições tem o vetor ${seq}?`) //Diz-nos quantas posições tem dentro de nosso vetor
console.log(`O vetor tem ${seq.length} posições!`) //Diz-nos o comprimento do nosso vetor
seq.push(10) // Acrescenta o valor 10 dentro de nosso vetor
console.log(`Acrescentamos um valor ao vetor como demonstrado abaixo!!`) 
console.log(`Este, agora é o vetor: ${seq}`) //Nos mostra o vetor com o valor acrescido
console.log(`Qual o primeiro valor no vetor?`) //Qual o nosso primeiro valor?
console.log(`O primeiro valor no vetor é o ${seq[0]}`) //Diz-nos qual é o nosso primeiro valor no vetor
console.log(seq) // Escreve-nos o vetor, após o acréscimo do valor
let pos = seq.indexOf(4) // 4 É O Valor buscado, que se encontra na chave 2
if (pos == -1) {
    console.log(`O valor solicitado não foi encontrado!`)
} else {
    console.log(`O valor é o ${pos}`)
}