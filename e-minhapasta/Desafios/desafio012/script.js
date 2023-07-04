function ver(){
    let pante = Number(prompt('Qual o preço anterior do produto?'))
    let patua = Number(prompt('Qual o preço atual do produto?'))

    let res = document.querySelector('div#res')
    if(pante < patua){
        let difer = patua - pante
        let pormaior = (patua / pante - 1) * 100 
        res.innerHTML='<p>Analisando os valores informados.</p>'
        res.innerHTML+=`<p>O produto custava R$ ${pante.toFixed(2).replace('.',',')} e agora custa R$ ${patua.toFixed(2).replace('.',',')}.</p>`
        res.innerHTML+=`<p>Hoje o produto esta mais caro.</p>`
        res.innerHTML+=`<p>O preço subiu R$ ${difer.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`
        res.innerHTML+=`Uma variação de ${pormaior.toFixed(2).replace('.',',')}% para cima.`
    }else if(pante > patua){
        let difer = pante - patua 
        let pormenor = (patua / pante - 1) * -100
        res.innerHTML='<p>Analisando os valores informados.</p>'
        res.innerHTML+=`<p>O produto custava R$ ${pante.toFixed(2).replace('.',',')} e agora custa R$ ${patua.toFixed(2).replace('.',',')}.</p>`
        res.innerHTML+=`<p>Hoje o produto esta mais barato.</p>`
        res.innerHTML+=`<p>O preço baixou R$ ${difer.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`
        res.innerHTML+=`Uma variação de ${pormenor.toFixed(2).replace('.',',')}% para baixo.`
    }

    
}