let all=document.getElementById("all")
let baseURL = "https://northwind.vercel.app/api/products"


fetch(`${baseURL}`)
    .then((rep) => rep.json())
    .then((data) => {
        renderUI(data)
    }).catch(error => console.log(error))

function renderUI(array) {
    let innerText=""
for (let i = 0; i < array.length; i++) {
    innerText += `
    <tr>
                <th scope="row">${array[i].id}</th>
                <td>${array[i].name}</td>
                <td>${array[i].quantityPerUnit}</td>
                <td>${array[i].supplierId}</td>
                <td>${array[i].discontinued}</td>
                <td>${array[i].unitsInStock}</td>
    
                <td><button id="buto" class="btn btn-success" onclick="deleteIt(${array[i].id})">Delete</button></td>
            </tr>
    `
    
}
all.innerHTML+=innerText
    
}

function deleteIt(id){
    fetch(`${baseURL}/${id}`, {
        method: "Delete"
    })
    .then(rep => {
        window.location.reload()
    })
    .catch(error => console.log(error))
}