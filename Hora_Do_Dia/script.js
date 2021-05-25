function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    img.src = '/img/manha.png'
    document.body.style.background = '#bcc8b6'
} else if (hora >= 12 && hora <=18){
    img.src = '/img/tarde.png'
    document.body.style.background = '#fceea0'
}else {
    img.src = '/img/noite.png'
    document.body.style.background = '#03424b'
}
}