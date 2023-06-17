function clicar() {
    let n1= Number(window.prompt('Digite um número:'))
    let n2= Number(window.prompt('Digite outro número:'))
    let res= document.querySelector('section#res')
    let maior
    if(n1 > n2){ maior = n1}else{
        maior = n2
    }
    res.innerHTML=`<p>Analisando os numeros <mark>${n1}</mark> e <mark>${n2}</mark> o maior valor é <strong>${maior}</strong>.`


}