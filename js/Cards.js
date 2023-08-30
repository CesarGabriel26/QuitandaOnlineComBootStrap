let ContainerCards = document.getElementById('ContainerCards')

const Card = (Data,Index) => `
    <div  class="card col-12 col-lg-3 col-md-6 mb-2">
        <ul class="list-group list-group-flush text-center">

            <li class="list-group-item">
                <div class="card-body">
                    <h5 class="card-title">${Data.name}</h5>
                </div>
            </li>

            <li class="list-group-item">
                <a href=" ${ Data.disabed? "" : "html/Produto.html"}"><img src="img/produtos/${Index}.jpg" class=" card-img mt-2 " alt="..."></a>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center ">
                <p class="card-title ">R$ 4,50</p>
                <button class="btn ${ Data.disabed? "btn-danger" : "btn-success"}  ${ Data.disabed? "disabled" : ""}" title="Adicionar ao carrinho">
                    <i class="bi bi-cart-plus"></i>
                    <small>Add ao carrinho</small>
                </button>
            </li>

            <li class="list-group-item">
                <p class="card-text ${ Data.disabed? "text-danger" : "text-success"}  ">${Data.estoque}</p>
            </li>

        </ul>
    </div>
`

function AddCards() {
    var Data = [
        {
            name : "Banana Prata",
            estoque : "320,5Kg em estoque",
            disabed : false
        },
        {
            name : "Abacaxi",
            estoque : "1520,5Kg em estoque",
            disabed : false
        },
        {
            name : "Mamão",
            estoque : "Fora de estoque",
            disabed : true
        },
        {
            name : "Maçã",
            estoque : "526,5Kg em estoque",
            disabed : false
        },
        {
            name : "Goiaba",
            estoque : "652Kg em estoque",
            disabed : false
        },
        {
            name : "Laranja",
            estoque : "545Kg em estoque",
            disabed : false
        },
        {
            name : "Abacate",
            estoque : "Fora de estoque",
            disabed : true
        },
        {
            name : "Abacate",
            estoque : "564Kg em estoque",
            disabed : false
        },
        {
            name : "Abo...Cabotiã",
            estoque : "641Kg em estoque",
            disabed : false
        },
        {
            name : "Abobora",
            estoque : "978Kg em estoque",
            disabed : false
        },
        {
            name : "Repolho",
            estoque : "354Kg em estoque",
            disabed : false
        },
        {
            name : "Alho",
            estoque : "Fora de estoque",
            disabed : true
        },
    ]

    Data.forEach((item,id) => {
        ContainerCards.innerHTML += Card(item,id+1)
    });
}
AddCards()