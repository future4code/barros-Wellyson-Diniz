// Exercícios de interpretação de código:
// 1 - 
// a. undefined
// b. null
// c. 11
// d. 3
// e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9 

// 2 - 
// O valor será 27

//---------------------------//---------------------------//------------------------//---------

// // Exercícios de escrita de código:
// // 1 - 

let nomeUser = prompt("Qual o seu nome?")
let emailUser = prompt("Qual o seu e-mail?")
console.log("O e-mail", emailUser + "  foi cadastrado com sucesso  " + "Seja bem vindo(a)", nomeUser)

// 2 - 
// Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima no console o array completo
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
// seguida por cada uma das comidas, uma embaixo da outra.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista


let comidas = [`banana`,
`mamão`,
`omelete`, 
`tapioca`, 
`macarronada`]
console.log("Essas são as minhas comidas preferidas: " + comidas)
let comidaUser = prompt("Qual a sua comida preferida?")
console.log(comidaUser)
comidas.splice(1,0)
console.log(comidas)
comidas.push(comidaUser)
console.log(comidas)

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//     c) Imprima o array no console
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//     e) Remova da lista o item de índice que o usuário escolheu.
    
//     f) Imprima o array no console


let listaDeTarefas
let tarefa01 = prompt("Digite uma tarefa")
let tarefa02 = prompt("Digite outra tarefa")
let tarefa03 = prompt("Digite mais uma tarefa")
listaDeTarefas = [tarefa01,tarefa02,tarefa03]
console.log(listaDeTarefas)
let tarefaFim = Number (prompt("Digite o índice da tarefa que você já realizou"))
console.log(listaDeTarefas.splice(tarefaFim,1)) 
console.log(listaDeTarefas)






