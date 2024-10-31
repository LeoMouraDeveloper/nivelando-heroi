/*
utilizei 3 formas para executar o programa,

A 1° eu utilizei a condicional If/Else 

A 2° eu utilizei o Switch/Case e dentro de cada case eu passo o valor do (Nível)

A 3° eu também utilizei o Switch/Case porém eu criei um array com os nomes de acordo com a xp do usuário, e no case eu comparo se o Xp corresponde ao (limite) estabelecido no array caso sim eu carrego o nome do nivel correspondente.

*/

// let xp = 0;
// let heroi = "";

// document.getElementById('heroForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     heroi = document.getElementById('heroi').value;
//     xp = parseInt(document.getElementById('Xp').value);
//     let nivel = "";

//     if (xp <= 1000) {
//         nivel = "Ferro";
//     } else if (xp >= 1001 && xp <= 2000) {
//         nivel = "Bronze";
//     } else if (xp >= 2001 && xp <= 5000) {
//         nivel = "Prata";
//     } else if (xp >= 5001 && xp <= 7000) {
//         nivel = "Ouro";
//     } else if (xp >= 7001 && xp <= 8000) {
//         nivel = "Platina";
//     } else if (xp >= 8001 && xp <= 9000) {
//         nivel = "Ascendente";
//     } else if (xp >= 9001 && xp <= 10000) {
//         nivel = "Imortal";
//     } else {
//         nivel = "Radiante";
//     }

//     alert(`O Herói de nome ${heroi} está no nível de ${nivel}`);
// });

// let xp = 0;
// let heroi = "";

// document.getElementById('heroForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     heroi = document.getElementById('heroi').value;
//     xp = parseInt(document.getElementById('Xp').value); 
//     let nivel = "";

//     switch (true) {
//         case (xp <= 1000):
//             nivel = "Ferro";
//             break;
//         case (xp >= 1001 && xp <= 2000):
//             nivel = "Bronze";
//             break;
//         case (xp >= 2001 && xp <= 5000):
//             nivel = "Prata";
//             break;
//         case (xp >= 5001 && xp <= 7000):
//             nivel = "Ouro";
//             break;
//         case (xp >= 7001 && xp <= 8000):
//             nivel = "Platina";
//             break;
//         case (xp >= 8001 && xp <= 9000):
//             nivel = "Ascendente";
//             break;
//         case (xp >= 9001 && xp <= 10000):
//             nivel = "Imortal";
//             break;
//         default:
//             nivel = "Radiante"; 
//             break;
//     }

//     alert(`O Herói de nome ${heroi} está no nível de ${nivel}`);
// });


let xp = 0;
let heroi = "";

document.getElementById('heroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    heroi = document.getElementById('heroi').value;
    xp = parseInt(document.getElementById('Xp').value);
    let nivel = "";

    const niveis = [
        { limite: 1001, nome: "Ferro" },
        { limite: 2001, nome: "Bronze" },
        { limite: 5001, nome: "Prata" },
        { limite: 7001, nome: "Ouro" },
        { limite: 8001, nome: "Platina" },
        { limite: 9001, nome: "Ascendente" },
        { limite: 10001, nome: "Imortal" },
        { limite: Infinity, nome: "Radiante" } 
    ];

    switch (true) {
        case (xp < niveis[0].limite):
            nivel = niveis[0].nome;
            break;
        case (xp <= niveis[1].limite):
            nivel = niveis[1].nome;
            break;
        case (xp <= niveis[2].limite):
            nivel = niveis[2].nome;
            break;
        case (xp <= niveis[3].limite):
            nivel = niveis[3].nome;
            break;
        case (xp <= niveis[4].limite):
            nivel = niveis[4].nome;
            break;
        case (xp <= niveis[5].limite):
            nivel = niveis[5].nome;
            break;
        case (xp <= niveis[6].limite):
            nivel = niveis[6].nome;
            break;
        default:
            nivel = niveis[7].nome; 
            break;
    }

    alert(`O Herói de nome ${heroi} está no nível de ${nivel}`);
});
