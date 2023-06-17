function clicar() {
let nome = window.prompt('Qual é o seu nome?')
let res = window.document.querySelector('section#res')
res.innerHTML=`<p>Olá, ${nome}! É um prazer te conhecer!&#x1F596`

}