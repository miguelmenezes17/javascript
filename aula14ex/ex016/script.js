function contar() {
    var inicio = document.querySelector('input#inicio')
    var end = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || end.value.length == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO]: Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var e = Number(end.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando passo 1')
            p = 1
        }
        if (i < e) {
            // Contagem Crescente
            for (let c = i ; c <= e ; c += p ) {
                res.innerHTML += ` ${c} \u{1F449}	`
            }   
        } else {
            // Contagem Regressiva
            for (let c = i ; c >= e ; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}