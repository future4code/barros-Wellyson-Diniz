Exercícios de Interpretação de Códigos:
1 - 
a - false
b - false
c - true
d - boolean 

 2 -
// Será impresso no console o primeiro e o segundo número que o usuário digitar no pop-up*

 3 - 
/* Ele esqueceu de fazer a conversão das variáveis. Ele deveria converter as variáveis 
let primeiroNumero e let segundoNumero de Strings para Number. */

//---------------------------------------------------------------------------------------------//

Exercícios de Escrita de Códigos:

 Exercício 1 - 
let idadeDoUsuario = Number(prompt ('Qual a sua idade?'))
console.log (idadeDoUsuario)
let idadeDoAmigo = Number (prompt ('Qual é a idade do seu melhor amigo(a) ?'))
console.log (idadeDoAmigo)
console.log ('Sua idade é maior do que a do seu melhor amigo?', idadeDoUsuario > idadeDoAmigo)
let diferençaDeIdade = idadeDoUsuario - idadeDoAmigo
console.log (diferençaDeIdade)

/*let numeroPar = Number(prompt ('Insira um numero par'))
console.log (numeroPar)
let divisao = Number(numeroPar) % 2 
console.log (divisao)
// inserindo um número par o resto sempre será zero
// inserindo um número ímpar o resto sempre será um*/

//---------------------------------------------------------------------------------------------//

 Exercício 2 - 
let idaDoUser = Number(prompt ('Qual a sua idade?'))
console.log (idaDoUser)
let idaMes = Number(idaDoUser) * 12
console.log ('Sua idade em meses é: ',idaMes)
let idaDias = Number(idaDoUser) * 365
console.log ('Sua idade em dias é: ',idaDias)
let idaHoras = Number(idaDoUser) * 8760
console.log ('Sua idade em horas é: ',idaHoras) 


 Exercício 3
let numeroUm = Number(prompt ('Digite um número'))
console.log (numeroUm)
let numeroDois = Number(prompt ('Digite mais outro número'))
console.log (numeroDois)
let priMaiorSeg = Number(numeroUm) > Number(numeroDois)
console.log ('O primeiro número é maior que o segundo?',priMaiorSeg)
let priIgualSeg = Number(numeroUm) === Number(numeroDois)
console.log (' O primeiro número é igual ao segundo?',priIgualSeg)
let priDivSeg = Number(numeroUm) % Number(numeroDois) === 0
console.log ('O primeiro número é divisivel pelo segundo?',priDivSeg)
let SegDivPri = Number(numeroDois) % Number(numeroUm) === 0
console.log ('O segundo número é divisivel pelo primeiro?',priDivSeg)


