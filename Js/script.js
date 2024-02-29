function toggleNavbar() {
    event.preventDefault(); 
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}




/////////////////////////////EVENTOS///////////////////////////



  

document.addEventListener('DOMContentLoaded', function() {
   
    document.addEventListener('DOMContentLoaded', function () {
        // Agrega un controlador de eventos al formulario
        document.getElementById('formulario').addEventListener('submit', function (event) {
          // Detiene el envío del formulario para evitar que se recargue la página
          event.preventDefault();
      
          // Puedes agregar aquí tu lógica para manejar el evento y mostrar información en la consola
          console.log('Formulario enviado');
      
          // Accede a los valores de los campos del formulario si es necesario
          var nombre = document.getElementById('nombrePedidol1').value;
          var numeroPersonas = document.getElementById('numeroDePersonas').value;
          var listo = document.getElementById('Check1').checked;
      
          console.log('Nombre:', nombre);
          console.log('Número de personas:', numeroPersonas);
          console.log('Listo:', listo);
    
            // Redirige a la página de compra.html
            window.location.href = '../HTML_MonsterCoffe/compra.html';
       
        });
      });
});


  