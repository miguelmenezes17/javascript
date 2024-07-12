let num = document.getElementById('fnum') //Buscando e armazenando numero na variavel num
let result = document.getElementById('res') //Buscando o campo da div res, isto é, que vai nos dar o resultado!
let lista = document.getElementById('flista') //Buscando a div#flista no select, onde estarão os elementos a serem inclusos na lista.
let valores = [] //Criando um vetor

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //Obs: a exclamação no inLista quer dizer 'não', ou seja, um numero que não esteja no inLista!

        valores.push(Number(num.value)) //Adicionei dentro de valores o numero que está na variavel num.
        let item = document.createElement('option') //Criamos dentro da div res o elemento option (tag)
        item.text = `Valor ${num.value} adicionado!` //Dentro do option colocamos uma mensagem "puxando" o numero num.
        lista.appendChild(item) //Adicionando o item dentro da lista!
        result.innerHTML = '' //Limpa os parágrafos lá em baixo, após adicionarmos algum outro numero, depois de ter finalizado o processo, obrigando-nos a clicar em finalizar para recalcular novamente o numero de elementos dentro de nosso vetor.
    } else {
        window.alert(`[ERRO!] Valor inválido ou já encontrado na lista!`) //Caso seja não seja um numero adicionado dentro da variavel num ou esse numero já esteja no inLista, o programa nos retornrá a mensagem acima! Avisando-nos ser um valor invalido ou um numero que nós já adicionamos dentro da lista!
    }

    num.value = '' //Apos adicionar o valor na lista e quisermos adicionar outro numero, apagar o numero digitado se tornará automático
    num.focus() //O foco da barra de digitação continuará dentro do input com id num
}

function finalizar() {
    if (valores.length == 0) {
        window.alert(`Adicione valores antes de finalizar!`) // Se tentarmos finalizar sem adicionar numeros no imput como solicitado no html, encontraremos o erro prescrito acima!
    } else {
        let tot = valores.length //Declaramos uma variavel tot para guardar o total de valores adicionados em nosso vetor 'valores'

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        } // Este for vai verificar um por um e verificar qual deles é o maior

        //O Código acima é para verificar o maior e o menor valor dentro do nosso vetor!




        media = soma / tot //Calculando a media com base na divisão da soma dos valores dividido pelo total de valores
        result.innerHTML = '' //Zerando o result
        result.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados!</p>` //De acordo com o total de valores que o nosso vetor tem, ao clicarmos em verificar, obteremos a mensagem acima, dizendo-nos quantos valores temos dentro de nosso vetor, de forma automatica.
        result.innerHTML += `<p>O maior valor informado foi o ${maior}.</p>` //Nos mostrará qual é o maior valor informado
        result.innerHTML += `<p>O menor valor informado foi o ${menor}.</p>` //Nos mostrará qual é o menor valor informado
        result.innerHTML += `<p>Somando todos os valores temos ${soma}</p>` //Nos mostrará a soma de todos os numeros
        result.innerHTML += `<p>A media dos valores digitados é ${media}</p>` //Nos mostrará a média de todos os numeros
    }   
}