
function contar() {
    
    let res = document.querySelector('section#res')

    res.innerHTML=`<h2>Contando de 1 até 10</h2>`

    let c = 1
    //for( c = 1; c <= 10; c += 1) 
    while (c <= 10) { 
        if(c % 2 == 0) { 
    res.innerHTML+=` <strong><mark>${c}</mark></strong>\u{1f449}`} else{
        res.innerHTML+=`${c}\u{1f449}`
    }
    c ++
    }
    res.innerHTML+=`\u{1f3c1}`
}