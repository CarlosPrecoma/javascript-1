
function contar() {
    
    let res = document.querySelector('section#res')

    res.innerHTML=`<h2>Contando de 1 até 10</h2>`

    let c = 2
    for( c = 2; c <= 10; c += 2) 
   
        res.innerHTML+=`${c}\u{1f449}`
    
    res.innerHTML+=`\u{1f3c1}`
   /* function contar() {
        let saida = document.getElementById('saida')
    
        saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`
        let cont = 2
        while (cont <= 10) {
            saida.innerHTML += ` ${cont} &#x1F449;`
            cont += 2 // Corresponde a cont = cont + 2
        }
        saida.innerHTML += ` &#x1F3C1;`
    }*/
}