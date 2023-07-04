function clic(){
    let mes = prompt('Digite o mês por extenso (ex: Março)')
    let estação
    let res = document.querySelector('div#res')
    switch (mes.toUpperCase()) {
        case "JANEIRO":
        case "FEVEREIRO":
        case "MARÇO":
                estação = 'VERÃO'
            break;
        case "ABRIL":
        case "MAIO":
        case "JUNHO":
            estação = 'OUTONO'
            break;
        case "JULHO":
        case "AGOSTO":
        case "SETEMBRO":
            estação = 'INVERNO'
            break;
        case "OUTUBRO":
        case "NOVEMBRO":
        case "DEZEMBRO":
            estação = 'PRIMAVERA'
            break;
        default:
            estação = 'INDEFINIDA'
            break
    }
    res.innerHTML=`<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>${estação}</mark></strong>.</p>` 


}