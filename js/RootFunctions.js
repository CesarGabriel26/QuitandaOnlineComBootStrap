//===================================================================================//
var header = document.getElementById('header')
var mains = document.getElementById('main')
var footer = document.getElementById('footer')
main.style.minHeight = `calc(100% - (${header.clientHeight}px + ${footer.clientHeight}px + 18px))`


function GotoProductPage(Page,Value) {
    localStorage.setItem('Produto',Value)
    window.location.href = Page
}

function LoadProductPage() {
    var ProdutoId = Number(localStorage.getItem('Produto'))
    var Produto = Data[ProdutoId]

    document.getElementById('PdImage').src = `../img/produtos/${ProdutoId+1}.jpg`
    document.getElementById('Comprar') .innerHTML = Produto.disabed? `<button" class="btn btn-danger disabled col-12">Fora de Estoque</button>`: `<button" class="btn btn-warning col-12"><i class="bi bi-cart-plus"></i> Adicionar Ao Carrinho</button>`
    document.getElementById('ProductTitle').innerHTML = `${Produto.name}`

    var images = document.querySelectorAll('.BT-Image')
    images.forEach(img => {
        img.src = `../img/produtos/${parseInt(Math.random() * 12)+1}.jpg`
    });

    document.getElementById('Preco').innerHTML = `
        ${
            Produto.Befpricing? `<span class="card-text text-start text-warning">
            <small>De <span class="text-decoration-line-through">R$ ${Produto.Befpricing}</span> </small> <br>
            </span>`:""
        }
        
        <span class="card-text fs-4">
            ${ Produto.Befpricing? `Por R$ ${Produto.pricing}`:`R$ ${Produto.pricing}`}
        </span>
    `
}

if(document.getElementById('PdImage')){
    LoadProductPage()
}