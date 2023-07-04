
function contar() {
    let res = document.querySelector('div#res')
    let n = Number(document.querySelector('input#inum').value)     

    res.innerHTML+=`<p><h2>Calculando ${n}</h2></p>`
    let c = n
    let fat = 1
    while(c >1) {
        res.innerHTML += `${c} X `
        fat *= c
        c --
    }
    res.innerHTML +=`1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`

}