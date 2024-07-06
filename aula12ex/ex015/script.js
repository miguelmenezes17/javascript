function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos! `
        res.appendChild(img)
    }
}