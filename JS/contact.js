document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.form') ,
            //----INPUT (TODOS LOS CAMPOS)----//
        inputs = document.querySelectorAll('.form input, textarea') ,
        //textArea = document.querySelector('.form #message') ;
            //----MENSAJES DE ERROR----//
        name_error = document.querySelector('.name_error') ,
        email_error = document.querySelector('.email_error') ,
        subject_error = document.querySelector('.subject_error') ,
        message_error = document.querySelector('.message_error') ;

    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{3,50}$/ ,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/ ,
        subject: /^[a-zA-Z0-9\s\,\_\-]{4,100}$/ , 
        message: /^[a-zA-Z0-9À-ÿ\s\?\¿\,]{4,400}$/ 
    }

    const campos = { //Define en principio como falso a cada campo (input, en base al objecto "expressions")
        name: false ,
        email: false ,
        subject: false ,
        message: false 
    }

    const validarFormulario = (e) => {
        switch (e.target.id) {  //Selecciona el atributo "name" de cada input
            case "name" :
                validarCampo(expressions.name, e.target, name_error, 'name') ;
            break ;
            case "email" :
                validarCampo(expressions.email, e.target, email_error, 'email') ;
            break ;
            case "subject" :
                validarCampo(expressions.subject, e.target, subject_error, 'subject') ;
            break ;
            case "message" :
                validarCampo(expressions.message, e.target, message_error, 'message') ;
            break ;
        } //shift + alt + ↓ (duplicar selección)
    }

    const validarCampo = (expression, input, fail_message, campo) => { //Función para cada caso en "switch"
        if (expression.test(input.value)) { //Comprueba la expresión regular con el valor del "input"
            fail_message.style.visibility = 'hidden' ;
            campos[campo] = true ;
        } else {
            fail_message.style.visibility = 'visible' ;
            campos[campo] = false ;
        }
    } ;

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario ) ; //Ejecuta un código por cada terminar de oprimir una tecla
        input.addEventListener('blur', validarFormulario ) ; //Ejecuta un código cuando se deselecciona el campo
           
    }) ;
    
    form.addEventListener('submit', function(e)  {
        //e.preventDefault() ;

        if (campos.name && campos.email && campos.subject && campos.message) {
            form.reset() ; //Limpia los valores inscritos en el formulario

            document.querySelector('.sent-message').style.visibility = 'visible' ;
            setTimeout(() => {
                document.querySelector('.sent-message').style.visibility = 'hidden' ; //Cambiar a: visibility = 'visible' ;
            }, 5000) ;
        } else { //Muestra mensaje de "campos sin completar" 
            document.querySelector('.fill-out-fields').style.visibility = 'visible' ;
            setTimeout(() => {
                document.querySelector('.fill-out-fields').style.visibility = 'hidden' ;
            }, 4000);
        }
    }) ;
}) ;

//PENDIENTE VINCULAR UN BREVE "BACK-END"

//const x = '5' ;
//const result1 = x ;
//const result2 = +x ;

//console.log(typeof result1); //string
//console.log(typeof result2); //number
