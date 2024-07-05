var agora = new Date ()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if (hora < 12 && hora > 5) {
    console.log(`Bom dia para Você!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde para Você!`)
} else if (hora > 18) {
    console.log(`Boa Noite para Você!`)
} else if (hora > 0 && hora < 5) {
    console.log(`Boa Madrugada para Você!`)
}