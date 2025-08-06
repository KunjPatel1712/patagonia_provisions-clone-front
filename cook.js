// Fetch and display data for both "products" and "Fish-Board"
function fetchdata() {
    // Fetch "products"
    fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => {
            showProducts(data);
        })
        .catch((err) => console.log("Error fetching products:", err));

    // Fetch "Fish-Board"
    fetch('http://localhost:3000/Fish-Board')
        .then((res) => res.json())
        .then((data) => {
            showFishBoard(data);
        })
        .catch((err) => console.log("Error fetching Fish-Board:", err));
}

fetchdata();

// Function to display "products"
function showProducts(data) {
    const card = document.getElementById("main-products");
    const store = data.map((ele) => {
        return addProductCard(ele.id, ele.image, ele.name, ele.price, ele.reviews);
    });
    card.innerHTML = store.join('');
}

// Function to display "Fish-Board"
function showFishBoard(data) {
    const board = document.getElementById("fish-board");
    const store = data.map((ele) => {
        return addFishBoardCard(ele.id, ele.image, ele.name, ele.price);
    });
    board.innerHTML = store.join('');
}

// Function to generate "products" HTML
function addProductCard(id, image, name, price, reviews) {
    return `
    <div class="card">
        <div class="card-img">
            <img src="${image}" alt="${name}"> 
        </div>
        <div class="card-body">
            <p class="card-name">${name}</p>
            <h4 class="card-id">ID: ${id}</h4>
            <p class="card-price">Sale Price: ${price}</p>
            <p class="card-reviews">Reviews: ${reviews}</p>
        </div>
    </div>
    `;
}

// Function to generate "Fish-Board" HTML
function addFishBoardCard(id, image, name, price) {
    return `
    <div class="card">
        <div class="card-img">
            <img src="${image}" alt="${name}"> 
        </div>
        <div class="card-body">
            <p class="card-name">${name}</p>
            <h4 class="card-id">ID: ${id}</h4>
            <p class="card-price">Price: ${price}</p>
        </div>
    </div>
    `;
}
