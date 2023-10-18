

function validarFormulario() {

    var nombre = document.getElementById("inputNombre").value.trim();
    var apellido = document.getElementById("inputApellido").value.trim();
    var dni = document.getElementById("dni").value.trim();
    var domicilio = document.getElementById("inputDomicilio").value.trim();
    var provincia = document.getElementById("inputProvincia").value.trim();
    var localidad = document.getElementById("inputLocalidad").value.trim();
    var email = document.getElementById("inputEmail4").value.trim();
    var password = document.getElementById("inputPassword4").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || apellido === "" || dni === "" || domicilio === "" || provincia === "" || localidad === "" || email === "" || password === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
      //enviar mensaje a un div -> innerHTML / createElement + appendChild

    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el apellido contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < apellido.length; i++) {
      var charCode = apellido.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if (dni.length !== 8) {
      alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
      return false;
    }
    for (var j = 0; j < dni.length; j++) {
      var digit = dni.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'dni' solo puede contener dígitos numéricos.");
        return false;
      }
    }

    // Verificar si el domicilio contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < domicilio.length; i++) {
      var charCode = domicilio.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'domicilio' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el localidad contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < localidad.length; i++) {
      var charCode = localidad.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'localidad' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }


    // Verificar si el email contiene solo caracteres alfabéticos
    for (var i = 0; i < email.length; i++) {
      var charCode = email.charCodeAt(i);
      if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(charCode)){
        alert("El campo 'email' solo puede contener caracteres alfabéticos");
        return false;
      }
    }


    // Verificar si el password contiene solo caracteres alfabéticos
    for (var i = 0; i < password.length; i++) {
      var charCode = password.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'password' solo puede contener caracteres alfabéticos");
        return false;
      }
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }
