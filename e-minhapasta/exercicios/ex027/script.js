function gerar(){
    let res = document.querySelector('section#res')
    let nu = Number(document.querySelector('input#inu').value)
    
    res.innerHTML=`<h2>Tabuada de ${nu}</h2>`
    let c = 1
    while(c <= 10){
        res.innerHTML+=`<p>${nu} x ${c} = <strong>${nu * c}</strong></p>`
        c++
    }
}