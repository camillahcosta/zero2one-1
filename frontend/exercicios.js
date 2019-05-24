const exibeNome = (novoNome, idade) => {
    if(novoNome === 'Pedro')
        novoNome = 'Nandi';
    
    return novoNome + ', ' + idade;
}

const adicionaNaLista = (array, produto) => {
    array.push(produto);
}

const removeDaLista = (array, posicao) => {
    array.splice(posicao, 1);
}

const pegaIndice = (array, conteudo) => {
    return array.indexOf(conteudo);
}

const arrayOriginal = (array) => {
    adicionaNaLista(array, 'Rodolfo');
    adicionaNaLista(array, 'José');
    adicionaNaLista(array, 'Matheus');
    adicionaNaLista(array, 'Joana');
    adicionaNaLista(array, 'Maria');
    adicionaNaLista(array, 'Roberta');

    return array;
}

const temO = (value) => {
    if(value.search(/o/) == -1)
        return false;
    else
        return true;
}
  
const exercicioArray = (array) => {
    console.log('exercicioArray:');
    
    array = arrayOriginal(array);

    console.log(array);
    
    removeDaLista(array, pegaIndice(array, 'Rodolfo'));
    removeDaLista(array, pegaIndice(array, 'José'));
    removeDaLista(array, pegaIndice(array, 'Maria'));

    console.log(array);

    adicionaNaLista(array, 'Renata');

    console.log(array);

    removeDaLista(array, (array.length - 1));

    console.log(array);

    removeDaLista(array, 0);

    console.log(array);
}

const exercicioArray2 = (array) => {
    console.log('exercicioArray2:');
    
    array = arrayOriginal(array);

    console.log(array.filter(temO));
}

const forEach = (element, index, array) => {
    if(!(temO(element))) {
        removeDaLista(array, index);
    }
}

const exercicioArray3 = (array) => {
    console.log('exercicioArray3:');

    array = arrayOriginal(array);

    array.forEach(forEach);

    console.log(array);
}

const produtosMarotos = [];

exercicioArray(produtosMarotos);
produtosMarotos.splice(0, produtosMarotos.length);
exercicioArray2(produtosMarotos);
produtosMarotos.splice(0, produtosMarotos.length);
exercicioArray3(produtosMarotos);

const pessoa = {
    nome:'Pedro',
    sobrenome:'Nandi',
    idade:27,
    altura:165,
    peso:65
};

console.log('Nome:', pessoa.nome);
console.log(JSON.stringify(pessoa));
