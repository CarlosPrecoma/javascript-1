function clicar() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}`))
    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    let media = (nota1 + nota2) / 2
    let msg
    if (media >= 6) {
        msg = 'Meus parabéns!'   }else {
            msg = 'Estude um pouco mais!'
        }
    let res = document.querySelector('section#res')
    res.innerHTML=`<p>Calculando a média de <mark>${nome}</mark>.</p>`
    res.innerHTML+=`<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
    res.innerHTML+=`<p>A média final é <mark>${media}</mark>.</p>`
    res.innerHTML+=`<p>A mensagem que temos é:<strong style='color:red;'>${msg}</strong></p>`
    
}