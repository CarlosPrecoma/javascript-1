let contador = 0
let res = document.querySelector('section#res')

function contar() {
    contador ++ /* igual contador = contador+1 */
    res.innerHTML=`<p>O contador esta com <mark>${contador}</mark> cliques</p>`
}
function zerar() {
    contador = 0
    res.innerHTML= null
}