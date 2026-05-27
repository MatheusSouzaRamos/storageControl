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
        console.log("Produtos: ", data);
        data.sort((a, b) => a.id - b.id);

        const resultado = document.getElementById("resultadoBuscaProduto");
        // const resultado2 = document.getElementById("resultadoBuscaProduto2");

        let linhas = "";
        for(const el of data){
            linhas += `
            <tr>
                <td>${el.id}</td>
                <td>${el.nome}</td>
                <td><button onclick="decrementarProduto(${el.id}); atualizarTabela()">-</button></td>
                <td>${el.quantidade}</td>
                <td><button onclick="incrementarProduto(${el.id}); atualizarTabela();">+</button></td>
                <td class="td-valor">R$ ${el.valor}</td>
            </tr>`
        }

        resultado.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Diminuir</th>
                    <th>Quantidade</th>
                    <th>Aumentar</th>
                    <th>Valor</th>
                </tr>
            </thead>
                <tbody>
                    ${linhas}
                </tbody>
        </table>`;

        // resultado2.innerHTML = resultado.innerHTML;

    })
    .catch(erro => console.log("Erro", erro))
}

function buscarProdutos2(){
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
        console.log("Produtos: ", data);
        data.sort((a, b) => a.id - b.id);

        const resultado2 = document.getElementById("resultadoBuscaProduto2");
        // const resultado2 = document.getElementById("resultadoBuscaProduto2");

        let linhas = "";
        for(const el of data){
            linhas += `
            <tr>
                <td>${el.id}</td>
                <td>${el.nome}</td>
                <td>${el.quantidade}</td>
                <td class="td-valor">R$ ${el.valor}</td>
            </tr>`
        }

        resultado2.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
                <tbody>
                    ${linhas}
                </tbody>
        </table>`;

        // resultado2.innerHTML = resultado.innerHTML;

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

        const resultado = document.getElementById("resultadoBuscaProduto");

        resultado.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Diminuir</th>
                    <th>Quantidade</th>
                    <th>Aumentar</th>
                    <th>Valor</th>
                </tr>

            <tr>
                <td>${data.id}</td>
                <td>${data.nome}</td>
                <td><button onclick="decrementarProduto(${data.id}); atualizarTabelaId()">-</button></td>
                <td>${data.quantidade}</td>
                <td><button onclick="incrementarProduto(${data.id}); atualizarTabelaId()">+</button></td>
                <td class="td-valor">R$ ${data.valor}</td>
            </tr>
        `
    })
    .catch(erro => console.log("Erro: ", erro));
}

function buscarProdutosNome(){
    let nome = document.getElementById("nomeBuscar").value;
    console.log(nome)

    if(!nome || nome.trim() === ""){
        // alert("Campo inválido.");
        buscarProdutos()
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
        data.sort((a, b) => a.id - b.id);

        const resultado = document.getElementById("resultadoBuscaProduto");

        let linhas = "";
        for(const el of data){
            linhas += `
            <tr>
                <td>${el.id}</td>
                <td>${el.nome}</td>
                <td><button onclick="decrementarProduto(${el.id}); atualizarTabelaNome()">-</button></td>
                <td>${el.quantidade}</td>
                <td><button onclick="incrementarProduto(${el.id}); atualizarTabelaNome()">+</button></td>
                <td class="td-valor">R$ ${el.valor}</td>
            </tr>`
        }

        resultado.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Diminuir</th>
                    <th>Quantidade</th>
                    <th>Aumentar</th>
                    <th>Valor</th>
                </tr>
            </thead>
                <tbody>
                    ${linhas}
                </tbody>
        </table>`;

    })
    .catch(erro => console.log("Erro", erro))
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
        if(!res.ok) throw new Error("Erro ao alterar quantidade do produto.");
        return;

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
        if(!res.ok) throw new Error("Erro ao alterar quantidade do produto");
        return;
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

        const resultado = document.getElementById("resultadoConsultaGeral");

        resultado.innerHTML = `
                <div class="card-consulta-itens produtos-disponiveis">
                    <h3>Produtos Disponíveis</h3>
                    <p>${data[0]}</p>
                </div>

                <div class="card-consulta-itens total-itens">
                    <h3>Total de Itens</h3>
                    <p>${data[1]}</p>
                </div>

                <div class="card-consulta-itens sem-estoque">
                    <h3>Sem Estoque</h3>
                    <p>${data[2]}</p>
                </div>
        `;

    })
    .catch(erro => {
        console.log("Erro: ", erro)
    })
}

function atualizarTabela(){
    setTimeout(() => {
        buscarProdutos();
        consultaGeral();
    }, 100);
}

function atualizarTabela2(){
    setTimeout(() => {
        buscarProdutos2();
        consultaGeral();
    }, 100);
}

function atualizarTabelaId(){
    setTimeout(() => {
        buscarProdutosId();
        consultaGeral();
    }, 100);
}

function atualizarTabelaNome(){
    setTimeout(() => {
        buscarProdutosNome();
        consultaGeral();
    }, 100);
}