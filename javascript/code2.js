


// =====================================
// VALIDACON FORMULARIO BASICO 
// =====================================
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const enviar = document.getElementById('boton');
const resultado = document.getElementById('resultado');
const trash = document.getElementById('boton-basura');



const validarCampos =()=>{
    
    if(nombre.value.length ==0 || email.value.length == 0 || mensaje.value.length ==0){
        return resultado.innerHTML='Todos los campos son requeridos :(';

    }

    if(nombre.value.length <= 3 ){
        nombre.classList.add('validation-green')
        return resultado.innerHTML='El nombre debe poseer mas de 5 caracteres';
        
    }

    
    else if(!email.value.toString().includes('@')  ){
        return resultado.innerHTML='El email debe contener "@" '

    }
   
    
    else{
        resultado.classList.add('green'); resultado.innerHTML;
        resultado.innerText='Mensaje enviado exitosamente';
        

    } 
    
}


enviar.addEventListener('click',(e)=>{
    e.preventDefault();
    validarCampos()

});


trash.addEventListener('click',()=> resultado.innerText='');
    








// =========================================================================     =============================================
//MOSTRAR MAS INFO CUANDO CLICKEO MORE INFO                                            EN PROCESO
// =========================================================================     =============================================

const arrowContainer = document.querySelector('.arrowContainer');
const arrow = document.querySelector('.arrow');


arrowContainer.addEventListener('click',()=>{
    console.log('APRIETO BOTON')
    arrow.classList.toggle('showP')
})












