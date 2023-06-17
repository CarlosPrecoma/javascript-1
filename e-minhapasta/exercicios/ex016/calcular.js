function clicar() {
    
    let agora = new Date
    let ano = agora.getFullYear()
    let idade = Number(window.prompt('Em que ano voce nasceu?'))
    let res = document.querySelector('section#res')
    let ida = ano - idade
    res.innerHTML=`<p>Quem nasceu em ${idade} vai completar <strong>${ida}</strong> anos em ${ano}`
}