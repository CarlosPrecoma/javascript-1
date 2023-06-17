function carregar() {                         
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if( hora >= 0 && hora <= 12) {
        imagem.src="imagens/dia.png"
        document.body.style.background = '#e6efa6ec'}
    else if(hora > 12 && hora <= 18) { 
        imagem.src="imagens/tarde.png"} 
    else{
        imagem.src="imagens/noite.png"
        document.body.style.background = '#222247cc'}
}
