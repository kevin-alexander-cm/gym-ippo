const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{3,10}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,10}$/, 
	password: /^.{4,12}$/, 
	correo:  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,30}$/i, 
	telefono: /^(\+?9)?(\s?)(0?9)(\s?)[98765432]\d{7}$/ ,
	rut: /^[1-9]+[-|]{1}[0-9kK]{1}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{3,10}$/
}
	
	


const campos = {
	usuario: false,
	nombre: false,
	apellido: false,
	password: false,
	correo: false,
	telefono: false,
	rut: false
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "apellido":
			validarCampo(expresiones.nombre, e.target, 'apellido');
		break;

		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;

		case "rut":
			validarCampo(expresiones.rut, e.target, 'rut');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre &&campos.nombre&& campos.password && campos.correo && campos.telefono && campos.rut && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


function gif3(){
    Swal.fire({
        title: 'Mensaje enviado .',
        width: 600,
        padding: '5em',
        background: '#fff url(/img/imagen_600x500.png)', //es el fondo de la caja de dialogo
        backdrop: `
        rgba(5, 5, 25, 0.4)
        url("https://vhchristianval.files.wordpress.com/2010/05/descendente-en-movimiento.gif")
        center left
        no-repeat
        `
    })
}
function gif(){
    Swal.fire({
        title: 'mensaje con errores.',
        width: 600,
        padding: '5em',
        background: '#fff url(/img/imagen_600x500.png)', //es el fondo de la caja de dialogo
        backdrop: `
        rgba(5, 5, 25, 0.4)
        url("https://cliply.co/wp-content/uploads/2021/07/372107370_CROSS_MARK_400px.gif")
        center left
        no-repeat
        `
    })
}



function gif2(){
	
	if (campos.usuario && campos.nombre &&campos.nombre&& campos.password && campos.correo && campos.telefono && campos.rut && terminos.checked ) {gif3();}

	else {gif()}
	
	}



