var email=null;
     function Getemail(){
        email= document.getElementsByName("correo")[0].value;
        alert(email);
     }
     
     function metodPrompt(){
       let comida = prompt ("cual es tu comida favorita?");
       document.getElementById('Dato').value=comida;
     }
     
