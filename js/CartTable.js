let TableBody = document.getElementById('TableBody')
var ListaCarrinho = JSON.parse(localStorage.getItem('ListaCarrinho')) || []

const TrItem = (id) =>`
    <tr class="table-light align-middle text-center">
        <td><button onclick="RemoveFromList(${id})" class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
        <td class="d-none d-lg-table-cell ">
            <img src="../img/produtos/${id}.jpg" alt="" style="height: 100px;">
        </td>
        <td>
            <h5>
                ${Data[id-1].name}
            </h5>
        </td>
        <td class="d-none d-lg-table-cell ">
            <h5>
                ${Data[id-1].Descount? Data[id-1].Descount : Data[id-1].price}
            </h5>
        </td>
        <td>
            <input id="inp${id}" onchange="UpdatePrice(${Data[id-1].Descount? Data[id-1].Descount : Data[id-1].price},${id})" type="number" min="1" value="1" class="bg-light text-dark p-1 border-1" style="width: 80px;">
        </td>
        <td>
            <h5 id="Total${id}">
            ${Data[id-1].Descount? Data[id-1].Descount : Data[id-1].price}
            </h5>
        </td>
    </tr>
`

function LoadTable() {
    TableBody.innerHTML = ""
    ListaCarrinho.forEach(Item => {
        TableBody.innerHTML += TrItem(Item)
    });
}

LoadTable()

function UpdatePrice(Price,id) {
    let inp = document.getElementById(`inp${id}`)
    let Total = document.getElementById(`Total${id}`)

    Total.textContent = (inp.value * Price).toFixed(2)
}

function RemoveFromList(id) {
    ListaCarrinho.splice(ListaCarrinho.indexOf(id), 1);
    LoadTable()
    localStorage.setItem('ListaCarrinho',JSON.stringify(ListaCarrinho))
}