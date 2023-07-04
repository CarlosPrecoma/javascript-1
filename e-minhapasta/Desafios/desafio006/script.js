function conv() {
    let temp = Number(window.prompt('Digite uma temperatura em graus°C(Celcius) '))
    let res = document.getElementById('res')
    res.innerHTML=`<p><strong>A temperatura de ${temp} °C corresponde a...</srtrong></p>`
    res.innerHTML +=`<p>${temp + 273.15  } °K (Kelvin) </p>`
    res.innerHTML +=`<p>${(temp * 1.8)+32} °F (Fahrenheit)</p>`
}