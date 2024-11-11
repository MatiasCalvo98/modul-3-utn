document.getElementById('cuadrado1').addEventListener('click', function() {
  this.style.backgroundColor = 'yellow'
})

document.getElementById('cuadrado2').addEventListener('click', function() {
    this.style.backgroundColor = 'orange'
})

document.getElementById('cuadrado3').addEventListener('click', function() {
    this.style.backgroundColor = 'aquamarine'
})

document.getElementById('text-area').addEventListener('input', function() {
    const largoTexto = this.value.length
    document.getElementById('contCar').textContent = largoTexto
})
