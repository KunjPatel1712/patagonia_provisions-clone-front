// Fetch and display data for all categories
function fetchdata() {
    // Fetch "products"
    fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => showProducts(data))
        .catch((err) => console.log("Error fetching products:", err));

    // Fetch "Fish-Board"
    fetch('http://localhost:3000/Fish-Board')
        .then((res) => res.json())
        .then((data) => showFishBoard(data))
        .catch((err) => console.log("Error fetching Fish-Board:", err));

    // Fetch "Gifts-Boxes"
    fetch("http://localhost:3000/Gifts+Boxes")
        .then((res) => res.json())
        .then((data) => showgiftboxes(data))
        .catch((err) => console.log( err));

    // Fetch "Best-Seller"
    fetch('http://localhost:3000/Best-Seller')
        .then((res) => res.json())
        .then((data) => showBestSeller(data))
        .catch((err) => console.log("Error fetching Best-Seller:", err));

    // Fetch "New-Arrival"
    fetch('http://localhost:3000/New-Arrival')
        .then((res) => res.json())
        .then((data) => showNewArrivals(data))
        .catch((err) => console.log("Error fetching New-Arrival:", err));

    // Fetch "Sea-Food"
    fetch('http://localhost:3000/Sea-Food')
        .then((res) => res.json())
        .then((data) => showSeaFood(data))
        .catch((err) => console.log("Error fetching Sea-Food:", err));
}

fetchdata();

function showProducts(data) {
    const card = document.getElementById("main-products");
    const store = data.map((ele) =>
        addProductCard(ele.id, ele.image, ele.name, ele.price)
    );
    card.innerHTML = store.join('');
}


function showFishBoard(data) {
    const board = document.getElementById("fish-board");
    const store = data.map((ele) =>
        addProductCard(ele.id, ele.image, ele.name, ele.price)
    );
    board.innerHTML = store.join('');
}


function showgiftboxes(data) {
    const board = document.getElementById("gifts+boxes");
    const store = data.map((ele) =>
        addProductCard(ele.id, ele.image, ele.name, ele.price)
    );
    board.innerHTML = store.join('');
}

function showBestSeller(data) {
    const card = document.getElementById("Best-seller");
    const store = data.map((ele) =>
        addProductCard(ele.id, ele.image, ele.name, ele.price)
    );
    card.innerHTML = store.join('');
}

function showNewArrivals(data) {
    const card = document.getElementById("New-Arrivals");
    const store = data.map((ele) =>
        addProductCard(ele.id, ele.image, ele.name, ele.price)
    );
    card.innerHTML = store.join('');
}

function showSeaFood(data)
{
    const card = document.getElementById("sea-food");
    const store = data.map((ele) =>
        addProductCard(ele.id, ele.image, ele.name, ele.price)
    );
    card.innerHTML = store.join('');
}
// Function to generate product cards HTML
function addProductCard(id, image, name, price) {
    return `
        <div class="card">
            <a href="discription.html?id=${id}&image=${encodeURIComponent(image)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}">
                <div class="card-img">
                    <img src="${image}" alt="${name}">
                </div>
            </a>
            <div class="card-body">
                <h4 class="card-title">${name}</h4>
                <p class="card-price">Price: ${price}</p>
                <p class="card-id">ID: ${id}</p>
            </div>
        </div>`
}