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
    let id = document.getElementById("ID").value;
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