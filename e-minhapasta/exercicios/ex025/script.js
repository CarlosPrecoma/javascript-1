function contar(){
    let num = document.querySelector('input#inum')
    let c = num.value
    let cont = 0 
    let res = document.querySelector('div#res')
        res.innerHTML+=`<p><h2>Contando de 0 até ${c}</h2></p>`
        for(cont = 0; cont <= c; cont +=1 ){
          
        res.innerHTML+=` ${cont }\u{1f449}`
    }
        res.innerHTML+=`\u{1f3c1}`
    
}
