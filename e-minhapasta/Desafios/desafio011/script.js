function veri() {
   let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
   let res = document.querySelector('div#res')
   if(ano % 4 == 0 && ano % 100 != 0){
    res.innerHTML=`Analisando o ano de ${ano} <mark style="background-color:#adff2f; color:#006600;">É BISSEXTO</mark>✅`
    } else if(ano % 100 == 0 && ano % 400 == 0 ){
        res.innerHTML=`Analisando o ano de ${ano} <mark style="background-color:#adff2f; color:#006600;">É BISSEXTO</mark>✅`
    } else{
        res.innerHTML=`Analisando o ano de ${ano} <mark style="background-color:salmon; color:#660000;">NÃO É BISSEXTO</mark>❌`
    }

}