function calc(){
    let nome = window.prompt('Qual é o nome do funcionário?')
    let sala = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let perc = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let reaj = (perc / 100) * sala
    let nvsa = sala + reaj
    let res = document.querySelector('div#res')
    res.innerHTML=`<p><strong>${nome} recebeu um aumento salarial!</strong></p>`
    res.innerHTML+=`<p>O salário atual era R$ ${sala.toFixed(2).replace('.',',')}.</p>`
    res.innerHTML+=`<p>Com aumento de ${perc}% o salário vai aumentar R$ ${reaj.toFixed(2).replace('.',',')} no próximo mês.</p>`
    res.innerHTML+=`<p>E apartir daí, ${nome} vai passar a receber R$ ${nvsa.toFixed(2).replace('.',',')}.</p> `

}