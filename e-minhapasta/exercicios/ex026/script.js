function contar(){
    let res = document.querySelector('div#res')
    let nu1 = Number(document.querySelector('input#inu1').value)
    let nu2 = Number(document.querySelector('input#inu2').value)
    let cont  
    
        res.innerHTML+=`<p><h2>Contando de ${nu1} até ${nu2}</h2></p>`
        if(nu1 < nu2){
        for(cont = nu1; cont <= nu2; cont +=1 ){      
        res.innerHTML+=` ${cont }\u{1f449}`}
    } else if(nu1 > nu2) {
        for(cont = nu1; cont >= nu2; cont -= 1)
        res.innerHTML+=` ${cont }\u{1f449}`
    }else{
        res.innerHTML+='Não é possivel contar, pois os numeros são iguais.'
    }
        res.innerHTML+=`\u{1f3c1}`
    
}
