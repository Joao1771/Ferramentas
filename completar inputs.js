function completar() {
    const form = document.querySelector('#form1')

    function achar(input){
        return form.querySelector('#' + input)
    }
const inputs = {
    cpf: achar('cpf'),
    nome: achar('nome'),
    mae: achar('mae_candidato'),
    pai: achar('pai_candidato'),
    nascimento: achar('data_nascimento'),//data
    nascimento2: achar('confere_nascimento'),//data
    sexo: achar('sexo'),//select
    nis: achar('numero_nis'),
    rg: achar('numero_rg'),
    rg2: achar('confirma_numero_rg'),
    expRg: achar('data_exp_rg'),//data
    orgRg: achar('org_exp_rg'),
    estado: achar('cod_estado_rg'),//select
    celular: achar('celular'),
    estadoCivil: achar('cod_estado_civil'),//select
    email: achar('e_mail'),
    email2: achar('confirma_e_mail'),
    escolaridade: achar('cod_escolaridade'),//select
    nacionalidade: achar('cod_nacionalidade'),//select
    raca: achar('cod_raca'),//select
    tipoEndereco: achar('tipo_endereco'),//select
    cep: achar('cep'),
    logradouro: achar('logradouro'),
    numero: achar('numero')
}

    const valores = {
        cpf: "11111111111",
        nome: 'NOME',
        mae: 'NOME',
        pai: 'NOME',
        nascimento: '2010-10-10',
        nascimento2: '2010-10-10',
        sexo: 'MASCULINO',
        nis: '1111111111111',
        rg: '11111111',
        rg2: '11111111111111',
        expRg: '2010-10-10',
        orgRg: 'SSP',
        estado: 18,
        celular: '9999999999999',
        estadoCivil: -1,
        email: 'joaoflavio@gmail.com',
        email2: 'joaoflavio@gmail.com',
        escolaridade: 8,
        nacionalidade: 'A',
        raca: 2,
        tipoEndereco: 'R',
        cep: '1111111111',
        logradouro: 'AVENIDA',
        numero: '111',
    }

    //função que pega o objeto com os nomes e os valores e insere nos inputs
    function inserir(){
        for (const [campo, valor] of Object.entries(valores)) {
    if (inputs[campo]) {
        inputs[campo].value = valor;
        console.log("sucesso", campo)
    }
    }
}
inserir()
}