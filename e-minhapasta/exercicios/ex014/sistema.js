function clicar() {
    let agora = new Date
    let res= document.querySelector('section#Res')
    res.innerHTML=`<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}