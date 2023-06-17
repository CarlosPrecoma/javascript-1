function clicar() {
  let num= Number(window.prompt('Digite um número:'))
  let res = document.querySelector('section#res')
  let msg
  if(num % 2 == 0) { msg = 'PAR'} else {msg = 'IMPAR'}
  res.innerHTML= `<p>O númer ${num} é<strong> ${msg}</strong>!</p>`
}