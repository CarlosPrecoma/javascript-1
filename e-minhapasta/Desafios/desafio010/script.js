function calc() {
    let numa = Number(window.prompt('Qual é o valor de a?'))
    let numb = Number(window.prompt('Qual e o valor de b?'))
    let numc = Number(window.prompt('Qual e o valor de c?'))
    let delta = (numb*numb - 4*numa*numc)
    let res = document.querySelector('div#res')
    
    res.innerHTML='<p><strong>Resolvendo Bhaskara</strong></p>'
    res.innerHTML+=`<p>A equação atual é ${numa}x² + ${numb}x + ${numc} = 0</p>`
    res.innerHTML+=`<p>O cálculo realizado será Δ = ${numb}² - 4 . ${numa} . ${numc} </p>`
    res.innerHTML+=`<p>O valor calculado foi <mark>∆ = ${delta}</mark></p>`
}