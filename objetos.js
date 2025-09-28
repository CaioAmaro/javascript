const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'Paula'

console.log('Nome: ', pessoa.nome)
console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    titulo: 'O Hobiit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'Ingles', 'Portugues', ' Espanhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Frances')

console.log('Livros antes: ', livro)

delete livro.paginas

console.log('livros depois', livro)

console.log('Autor do livro ', livro['autor'])
console.log('Editora do livro ', livro['editora'])

const autor = {
    nome: 'J R R tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

livro.autor = autor

console.log(livro)

livro.autor.nome