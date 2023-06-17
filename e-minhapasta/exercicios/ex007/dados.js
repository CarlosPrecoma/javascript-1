function clicar() {

    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt('Qual foi a primeira nota dele?'))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}`))
    media = (n1+n2)/2
    let res = window.document.getElementById('res')
    res.innerHTML=`<p>Calculando a média final de <mark>${nome}</mark>. </p>`
    res.innerHTML+=`<p>As nota obtidas foram <mark>${n1} e ${n2}</mark>. </p>`
    res.innerHTML+=`<p> A média final sera <mark> ${media}</mark>.</p>`


}