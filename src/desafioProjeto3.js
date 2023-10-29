// Desafio de Projeto 03 (Formação: Lógica de Programação) - Escrevendo as Classes de um Jogo
// Developer: Rafael Lucas
// Data: 29/10/2023

class heroiDeAventura{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new heroiDeAventura("Frank", 28, "mago", "magia")
let guerreiro = new heroiDeAventura("RonC", 18, "guerreiro", "espada")
let monge = new heroiDeAventura("Flamp", 30, "monge", "artes maciais")
let ninja = new heroiDeAventura("Uzumaki", 22, "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()