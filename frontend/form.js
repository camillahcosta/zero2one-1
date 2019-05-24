let botaoAdicionar = document.querySelector("#adicionar-produto");

botaoAdicionar.addEventListener("click", function (){
    /*
    comportamento padrão do evento seria atualizar a página e não exibir msg no console
    por conta de ser um botão de <form>. Comando "preventDefault" impede que o evento
    siga seu curso natural e o faz seguir o que o evento determina
    */
   event.preventDefault();

   let form = document.querySelector("#form-adiciona");

   let produto = obtemProdutoDoFormulario(form);

   console.log(JSON.stringify(produto));
});    

function obtemProdutoDoFormulario(form) {
    let produto = {
        nome: form.nome.value,
        valor: form.valor.value,
        url: form.url.value,
        descricao: form.desc.value
    }
	
    return produto;
}    