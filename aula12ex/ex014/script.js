function carregar() {
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas!`
   if (hora >= 5 && hora < 12) {
    // BOM DIA!
    img.src = 'fotomanha.png'
    window.document.body.style.backgroundColor = '#e4c794'

   } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'fototarde.png'
    window.document.body.style.backgroundColor = '#d48440'

   } else if (hora >= 18 && hora < 23) {
    //BOA NOITE!
    img.src = 'fotonoite.png'
    window.document.body.style.backgroundColor = '#403936'
   } else if (hora >= 0 && hora < 5) {
    //BOA MADRUGADA!
    window.document.body.style.backgroundColor = '#403936'
   }

}
