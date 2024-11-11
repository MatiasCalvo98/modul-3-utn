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

var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

  let alumnosAprobados = alumnos.filter(function(alumno){
    return alumno.nota >= 7
  })

  console.log(alumnosAprobados)