let num = document.getElementById('fnum')
let result = document.getElementById('res')
let lista = document.getElementById('flista')
let valores = []

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
        
    } else {
        window.alert(`[ERRO!] Valor inválido ou já encontrado na lista!`)
    }
}