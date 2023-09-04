let ContainerCards = document.getElementById('ContainerCards')

const Card = (Data, Index) => `
    <div class="card col-12 col-lg-3 col-md-6 mb-2">
        <ul class="list-group list-group-flush text-center">

            <li class="list-group-item">
                <div class="card-body">
                    <h5 class="card-title">${Data.name}</h5>
                </div>
            </li>

            <li class="list-group-item">
                <a onclick="GotoPage(${Index})"><img src="img/produtos/${Index}.jpg" class=" card-img mt-2 " alt="..."></a>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center ">

                <div class="mb-3 d-flex flex-column align-items-start">
                    ${
                        Data.Descount? `

                            <span class=" text-decoration-line-through text-warning-emphasis card-text" id="Produ-Name">
                                <small>R$ ${Data.price}</small>
                            </span> 
                            
                            <span class=" card-text fs-5" id="Produ-Name">
                                R$ ${Data.Descount}
                            </span>
                        `:
                        `
                            <span class=" card-text fs-5" id="Produ-Name">
                                    R$ ${Data.price}
                            </span>
                        `
                    }
                </div>

                <button class="btn ${Data.disabed ? "btn-danger" : "btn-success"}  ${Data.disabed ? "disabled" : ""}" title="Adicionar ao carrinho">
                    <i class="bi bi-cart-plus"></i>
                    <small>Add ao carrinho</small>
                </button>
            </li>

            <li class="list-group-item">
                <p class="card-text ${Data.disabed ? "text-danger" : "text-success"}  ">${Data.estoque}</p>
            </li>

        </ul>
    </div>
`
const Data = [
    {
        name: "Banana Prata",
        estoque: "320,5Kg em estoque",
        disabed: true,
        price: 20.32,
        Descount: 6.25
    },
    {
        name: "Abacaxi",
        estoque: "1520,5Kg em estoque",
        disabed: false,
        price: 15.67
    },
    {
        name: "Mamão",
        estoque: "Fora de estoque",
        disabed: true,
        price: 9.82
    },
    {
        name: "Maçã",
        estoque: "526,5Kg em estoque",
        disabed: false,
        price: 2.15
    },
    {
        name: "Goiaba",
        estoque: "652Kg em estoque",
        disabed: true,
        price: 10.25,
        Descount: 9.12
    },
    {
        name: "Laranja",
        estoque: "545Kg em estoque",
        disabed: false,
        price: 9.78
    },
    {
        name: "Abacate",
        estoque: "Fora de estoque",
        disabed: true,
        price: 5.32
    },
    {
        name: "Abacate",
        estoque: "564Kg em estoque",
        disabed: false,
        price: 9.85
    },
    {
        name: "Abo...Cabotiã",
        estoque: "641Kg em estoque",
        disabed: true,
        price: 18.95,
        Descount: 10.35
    },
    {
        name: "Abobora",
        estoque: "978Kg em estoque",
        disabed: false,
        price: 9.25
    },
    {
        name: "Repolho",
        estoque: "354Kg em estoque",
        disabed: false,
        price: 32.58
    },
    {
        name: "Alho",
        estoque: "Fora de estoque",
        disabed: true,
        price: 20.32,
        Descount: 3.35
    },
]

function AddCards() {


    Data.forEach((item, id) => {
        ContainerCards.innerHTML += Card(item, id + 1)
    });
}

if (ContainerCards) {
    AddCards()
}

function GotoPage(Produto) {
    window.location.href = "html/Produto.html"
    localStorage.setItem('Produto', Produto)
}