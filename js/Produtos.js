var ListaCarrinho = JSON.parse(localStorage.getItem('ListaCarrinho')) || []
var ProdutoId = localStorage.getItem('Produto')
//console.log(ListaCarrinho)
//console.log(ListaCarrinho.indexOf(Number(ProdutoId)))

function GetProduct() {


    //console.log(ProdutoId);
    //console.log(Data[ProdutoId]);

    var produto = Data[ProdutoId - 1]

    //Setando imagem e nome do produto
    document.getElementById('Produ-Image').src = `../img/produtos/${ProdutoId}.jpg`
    document.getElementById('Produ-Name').innerHTML = produto.name

    //Mudando o botão, deixando-o vermelho caso o produto esteja fora de estoque
    //Ou deixando-o amarelo caso o produto esteja em estoque
    document.getElementById('Produ-AddCart').innerHTML = produto.disabed ? `<i class="bi bi-slash-circle"></i> Fora de estoque` : `<i class="bi bi-cart-plus"></i> Adicionar Ao Carrinho`
    if (produto.disabed) {
        document.getElementById('Produ-AddCart').setAttribute('disabled', true)
    }
    document.getElementById('Produ-AddCart').classList.toggle(produto.disabed ? "btn-warning" : "btn-danger")

    //Exibindo preço do produto e checando se a descontos
    document.getElementById('price').innerHTML = produto.Descount ? `

        <span class=" text-decoration-line-through text-warning-emphasis card-text" id="Produ-Name">
            <small>R$ ${produto.price}</small>
        </span> <br>
        
        <span class=" card-text fs-5" id="Produ-Name">
            R$ ${produto.Descount}
        </span>
    `:
        `
        <span class=" card-text fs-5" id="Produ-Name">
                R$ ${produto.price}
        </span>
    `
    var jaescolido = []
    for (let i = 0; i < 3; i++) {

        var random = parseInt(Math.random() * Data.length)
        //console.log(random)

        if (random != (ProdutoId - 1) && jaescolido.indexOf(random) <= -1) {
            document.getElementById(`img${i}`).src = `../img/produtos/${random + 1}.jpg`
            jaescolido.push(random)
        } else {
            i--
        }
    }

}

function AddToCart() {
    if (ListaCarrinho.indexOf(Number(ProdutoId)) == -1) {
        ListaCarrinho.push(Number(ProdutoId))
        localStorage.setItem('ListaCarrinho', JSON.stringify(ListaCarrinho))
    }
    window.location.href = "Cart.html"
}

GetProduct()