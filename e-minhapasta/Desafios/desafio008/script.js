let prod = window.prompt('Qual produto você esta comprando?')
let valor = Number(window.prompt(`Qual é o preço do ${prod}?`))
function calc() {
    let desc = valor * 0.1
    let res = document.querySelector('div#res')
    res.innerHTML=`<p><strong>Calculando o desconto de 10% para ${prod}</strong></p>`
    res.innerHTML+=`<p>O preço original era R$ ${valor.toFixed(2)}. </p>`
    res.innerHTML+=`<p>Você acaba de ganhar R$ ${desc.toFixed(2)} de desconto (-10%).</p>`
    res.innerHTML+=`<p>No fim, você vai pagar <mark>R$ ${valor - desc.toFixed(2)}</mark> no produto ${prod}.</p>`
}
