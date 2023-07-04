
function contar() {
    
    let res = document.querySelector('section#res')

    res.innerHTML=`<h2>contagem regressiva de 10 a 1</h2>`

    let c = 10
    for( c = 10; c >= 1; c -= 1) 
   
        res.innerHTML+=` ${c }\u{1f449}`


    
    res.innerHTML+=`\u{1f3c1}`
}