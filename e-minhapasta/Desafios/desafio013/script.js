function clic() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Primeira nota de ${nome}`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}`))
    let media = (nota1 + nota2) / 2
    let res = document.querySelector('div#res')
    if(media >= 6){
        res.innerHTML=`<p><strong>Analisando a situação de ${nome}.</strong></p>`
        res.innerHTML+=`<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)} a <strong>média é ${media.toFixed(2)}</strong>.</p>`
        res.innerHTML+=`<p>Com a média acima de 6.00, o aluno esta <mark style="background-color:#adff2f; color:#006600;">APROVADO</mark>.</p>`
    } else if(media >= 3 && media < 6) {
        res.innerHTML=`<p><strong>Analisando a situação de ${nome}.</strong></p>`
        res.innerHTML+=`<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)} a <strong>média é ${media.toFixed(2)}</strong>.</p>`
        res.innerHTML+=`<p>Com a média entre 3.00 e 6.00, o aluno esta em <mark style="background-color:#FDAC5 ;color:#3022C9;">RECUPERAÇÃO</mark>.</p>`
    } else{
        res.innerHTML=`<p><strong>Analisando a situação de ${nome}.</strong></p>`
        res.innerHTML+=`<p>Com as notas ${nota1.toFixed(2)} e ${nota2.toFixed(2)} a <strong>média é ${media.toFixed(2)}</strong>.</p>`
        res.innerHTML+=`<p>Com a média abaixo de 3.00, o aluno esta <mark style="background-color:salmon; color:#660000;">REPROVADO</mark>.</p>`
    }
    
}
