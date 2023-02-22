const name = 'Erick Martínez';
var email = "erick404@gmail.com";

let instructor = {
    name: name,
    email: email,
    age: 35,
    languages: ['Spanish', 'English', 'Português']
}

let run = true
while (run) {
    for (let languages of instructor.languages) {
        if (languages == 'Spanish') {
            console.log('Hola amigo!')
        } else {
            switch (languages) {
                case "English":
                    console.log("Hello my friend");
                    break;
                case 'Português':
                    console.log("Olá, meu amigo");
                    break;
                default:
                    // Aquí estamos usando una cadena de plantilla
                    console.log(`Hello my friend using ${languages}`);
                    break;
            }
        }
    }
    run = false;
}