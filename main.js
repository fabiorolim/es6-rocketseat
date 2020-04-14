class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Fabio';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList();

document.getElementById('novo_todo').onclick = function () {
    minhaLista.add('tarefa');
    minhaLista.mostraUsuario();
};
//Operações com vetores
const numeros = [1, 2, 3, 4]

const novosNumeros = numeros.map(function (item, index) {
    return item * index;
});

console.log(novosNumeros);

const soma = numeros.reduce(function (total, next) {
    return total + next;
});
console.log(soma);

const pares = numeros.filter(function (item) {
    return item % 2 === 0;
})
console.log(pares);

const localiza = numeros.find(function (item) {
    return item === 3;
});

console.log(localiza);

//Arrow functions 
//Apenas com funções anônimas
const novos = numeros.map((item, index) => {
    return item * index;
});

console.log(novos);

const novos2 = numeros.map(item => {
    return item * 2;
});

console.log(novos2);

const novos3 = numeros.map(item => item * 2);

console.log(novos3);

//Desestruturação

const usuario = {
    nome: 'Fabio',
    idade: 32,
    endereco: {
        cidade: 'Oeiras',
        uf: 'PI'
    },
}

// const nome = usuario.nome;
// const cidade = usuario.endereco.cidade;

const { idade, endereco: { uf } } = usuario;

console.log(idade);
console.log(uf);

function mostrarNomeIdade({nome, idade}){
    console.log(nome, idade);
}

mostrarNomeIdade(usuario);

//Rest
const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);