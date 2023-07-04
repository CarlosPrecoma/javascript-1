function clicar() {
    let nu1 = Number(prompt('Primeiro Valor: ')) 
    let nu2 = Number(prompt('Segundo Valor: '))
    let opc = Number(prompt(`Valores informados: ${nu1} e ${nu2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let res = document.querySelector('section#res')
        res.innerHTML='<h2>Calculando...</h2>'
        switch(opc) {
            case 1:
                res.innerHTML +=`<p>${nu1} + ${nu2} = <strong>${nu1 + nu2}</strong></p>`
                break;
            case 2:
                res.innerHTML +=`<p>${nu1} - ${nu2} = <strong>${nu1 - nu2}</strong></p>`
                break;
            case 3:
                res.innerHTML +=`<p>${nu1} * ${nu2} = <strong>${nu1 * nu2}</strong></p>`
                break;
            case 4:
                res.innerHTML +=`<p>${nu1} / ${nu2} = <strong>${nu1 / nu2}</strong></p>`
                break;
            default:
                res.innerHTML +=`<p>OPÇÃO INVÁLIDA! Você digitou ${nu1} e ${nu2}, mas não sei o que fazer com eles,</p>`
                break;


        }
}

   
