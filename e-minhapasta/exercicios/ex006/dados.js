function clicar() {

let n1 = Number(window.prompt('Digite um número'))
let n2 = Number(window.prompt('Digite o segundo número'))
soma = n1 + n2
let res = window.document.querySelector('section#res')
res.innerHTML=`<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é <strong>${soma}</strong>! `

}