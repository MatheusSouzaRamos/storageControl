function buscarProdutos(){
    fetch("http://localhost:8080/produtos",{
        method: "GET",
        headers: {
            "Accept" : "application/json",
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao buscar Produtos");
        return res.json();
    })
    .then(data => {
        console.log("Produtos: ", data)
    })
    .catch(erro => console.log("Erro", erro))
}

function buscarProdutosId(){
    let id = document.getElementById("idBuscar").value;

    if(!id){
        alert("Informe um id válido.")
        return;
    }

    fetch(`http://localhost:8080/produtos/${id}`, {
        method: "GET",
        headers: {
            "Accept" : "application/json"
        }
    }).then(res => {
        if(!res.ok) throw new Erro("Erro ao buscar produto");
            return res.json();
    })
    .then(data => {
        console.log("Produto:", data);
    })
    .catch(erro => console.log("Erro: ", erro));
}

function buscarProdutosNome(){
    let nome = document.getElementById("nomeBuscar").value;
    console.log(nome)

    if(!nome || nome.trim() === ""){
        alert("Campo inválido.");
        return;
    }

    fetch(`http://localhost:8080/produtos/buscar/${nome}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(res => {
        if(!res.ok) throw new Error("Erro ao buscar produtos.");
        return res.json();
    })
    .then(data => {
        console.log("Produtos: ", data);
    })
    .catch(erro => {
        console.log("Erro ao buscar produtos: ", erro)
    })
}

function inserirProduto(){
    let nomeInsert = document.getElementById("NOMEINSERT").value;
    let qntInsert = document.getElementById("QNTINSERT").value;
    let valorInsert = document.getElementById("VALORINSERT").value;

    console.log(nomeInsert);
    console.log(qntInsert);
    console.log(valorInsert);

    if(!nomeInsert || nomeInsert.trim() === "" || !qntInsert || !valorInsert){
        alert('Campos inválidos!');
        return;
    }

    fetch("http://localhost:8080/produtos" , {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            nome: nomeInsert,
            quantidade: qntInsert,
            valor: valorInsert
        })

    }).then(res => {
        if(!res.ok){
            console.log("Erro ao inserir produto.")
            return res.json()
        }
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function updateProduto(){
    let idupdate = document.getElementById("idupdate").value;
    let nomeupdate = document.getElementById("nomeupdate").value;
    let qntupdate = document.getElementById("qntupdate").value;
    let valorupdate = document.getElementById("valorupdate").value;

    console.log(idupdate)
    console.log(nomeupdate);
    console.log(qntupdate);
    console.log(valorupdate);

    if(!idupdate || !nomeupdate || nomeupdate.trim() === "" || !qntupdate || !valorupdate){
        alert('Campos inválidos!');
        return;
    }

    fetch(`http://localhost:8080/produtos/${idupdate}`, {
        method: "PUT",
        headers : {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeupdate,
            quantidade: qntupdate,
            valor: valorupdate
        })
    })
    .then(res => {
        if(!res.ok){
            console.log("Erro ao atualizar produto.");
            return;
        }
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

function deletarProduto(){
    let id = document.getElementById("iddeletar").value;

    if(!id){
        alert("Insira um Id válido.");
        return;
    }

    fetch(`http://localhost:8080/produtos/${id}`,{
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
    })
    .then(res => {
        if(!res.ok){
            console.log("Erro ao deletar produto.")
            return;
        }
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    })
}

function alterarQuantidadeProduto(){
    let id = document.getElementById("idAlterar").value;
    let qnt = document.getElementById("quantidadeAlterar").value;

    if(!id || !qnt){
        alert("Insira valores válidos");
        return;
    }

    fetch(`http://localhost:8080/produtos/${id}/${qnt}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok){
            console.log("Erro ao alterar quantidade do produto.");
            return;
        }
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

function incrementarProduto(id){
    fetch(`http://localhost:8080/produtos/${id}/${1}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok){
            console.log("Erro ao alterar quantidade do produto.");
            return;
        }
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

function decrementarProduto(id){
    fetch(`http://localhost:8080/produtos/${id}/${-1}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        }
    })
    .then(res => {
        if(!res.ok){
            console.log("Erro ao alterar quantidade do produto.");
            return;
        }
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

function consultaGeral(){
    fetch("http://localhost:8080/produtos/consultaGeral", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(res =>{
        if(!res.ok) throw new Error("Erro ao consultar métricas.");
        return res.json();
    })
    .then(data => {
        console.log("Métricas gerais: ", data);
    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}