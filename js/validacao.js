//Apenas letra/acentos no campo nome
jQuery('#nome').keyup(function () {
    this.value = this.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
});

var nome = document.getElementById("nome");

//Validação data de nascimento
var formulario = document.getElementById("formulario");
var nascimento = document.getElementById("dataNascimento");

var mensagemErro = function (event, input, mensagem) {
    //input.setCustomValidity(mensagem);
    alert(mensagem);
    event.preventDefault();
}

formulario.addEventListener("submit", function (event) {
    var data = nascimento.value;

    //nenhuma data informada
    if (!data) {
        return mensagemErro(event, nascimento, "Campo nascimento não informado");
    }

    //O browser não realizou a conversão de forma nativa
    if (!(data instanceof Date)) {
        data = data.split('/').reverse().join('-');
        data = Date.parse(data);
        if (!isNaN(data)) {
            data = new Date(data);
        }
    }

    //a data informada não é valida
    if (!data) {
        return mensagemErro(event, nascimento, "Campo nascimento não é valido");

    }
    var atual = new Date();
    data.setFullYear(data.getFullYear());

    if (data >= atual) {
        return mensagemErro(event, nascimento, "Data inválida");
    }

    var dataMenor = 1890;
    data.setFullYear(data.getFullYear());
    if (data.getFullYear() <= dataMenor) {
        return mensagemErro(event, nascimento, "Data inválida");

    }
})