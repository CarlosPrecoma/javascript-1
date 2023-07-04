let cot = Number(window.prompt('Informe a cotação do Dollar de hoje?'))
function converte() {
    let real = Number(window.prompt('Quantos reais você quer converter?'))
    let dollar = real / cot
    let res = document.getElementById('res')
    res.innerHTML=`Você tem <mark>R$ ${real}</mark> na cotação de hoje são <mark>US$ ${dollar .toFixed(2)}</mark>! ` 

}