window.alert('Bem vindo(a) ao meu site')
function clicar() {
    let num = window.prompt('Digite um número')
    let res = window.document.getElementById('res')
    res.innerHTML=`<p>O dobro de ${num} é ${num*2} e a metade é ${num/2}!</p> `

}