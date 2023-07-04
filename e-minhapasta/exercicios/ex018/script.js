function sortear(){
    comput = Math.floor(Math.random()*100)  + 1

}

function clicar(){
    let jogador = Number(prompt('Qual é o seu palpite?'))
    let res = document.querySelector('section#res')
    if(jogador < comput){
        res.innerHTML+=`<p>Você escolheu <mark>${jogador}</mark>. Meu número é <strong>Maior!</strong></p>`} else if(jogador > comput){
            res.innerHTML+=`<p>Você escolheu <mark>${jogador}</mark>. Meu número é <strong>Menor</strong>!</p>`
        } else if ( jogador == comput){
            res.innerHTML+=`<p><strong><mark>PARABENS</mark></strong> você acertou meu número é <mark>${comput}</mark>.</p>`
        
        document.getElementById('botao').style.visibility = 'hidden'
    }
}

    
