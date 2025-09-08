
// Load all categories button
const loadCatagorys = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => {
            displayCatagory(data.categories)
        })
}

// Load plants by category id
const loadTree = (id) => {

    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayLevelPlant(data.plants)
        })
}

// Load ALL plants together
const loadAllTrees = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => {
            displayLevelPlant(data.plants)
        })
}

let cart = []; // cart data

// Display cards
const displayLevelPlant = (plantArray) => {

    const cardsGrid = document.getElementById('cardsGrid')
    cardsGrid.innerHTML = ""

    plantArray.forEach(plant => {
        const card = document.createElement('div')
        card.innerHTML = `
            <div class="p-2 rounded w-64 bg-white border border-gray-100">
                <img src="${plant.image}" class="w-full h-40 object-cover rounded">
                <h3 class="text-lg font-bold mt-2">${plant.name}</h3>
                <small class="text-sm text-gray-600">${plant.description.slice(0, 60)}...</small>
                
                <div class="flex justify-between">
                    <p class="bg-gray-300 rounded-3xl px-2 py-1 text-red-600">${plant.category}</p>
                    <p class="font-bold px-3">৳${plant.price}</p>
                </div>
                
                <button onclick="addToCart(${plant.price})"
                    class="bg-green-700 text-white px-3 py-1 rounded-3xl mt-2 w-full hover:bg-green-500 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        `
        cardsGrid.appendChild(card)
    })
    manageSpinner(false)
}

// Add to Cart function
const addToCart = (price) => {
    if (confirm(`Price: ৳${price}     Do you want to add this to cart?`)) {

        cart.push(price)
        updateCartUI()
    }
}

// Update Cart UI
const updateCartUI = () => {
    const cartList = document.getElementById('cartList')
    const totalPrice = document.getElementById('totalPrice')

    cartList.innerHTML = "" //ager list clear 

    if (cart.length === 0) {
        cartList.innerHTML = `<li class="text-gray-400">Cart is empty</li>`
        totalPrice.innerText = "0"
        return
    }


    let sum = 0
    cart.forEach((price, index) => {

        sum = sum + price
        const li = document.createElement('li')
        li.className = "flex justify-between items-center border-b pb-1"

        li.innerHTML = `
            
            <span>৳${price}</span>
            <button onclick="removeFromCart(${index})" 
                class="text-red-500 font-bold cursor-pointer">✖</button>
        `
        cartList.appendChild(li)
    })

    totalPrice.innerText = `৳${sum}`
}

// Remove from cart
const removeFromCart = (index) => {
    cart.splice(index, 1) // nidristo item delete
    updateCartUI()
}


// Display categories (with All button)
const displayCatagory = (catagorys) => {
    const levelCategories = document.getElementById('level-categories')
    levelCategories.innerHTML = ""

    // Add "All Trees" button
    const allBtn = document.createElement('button')
    allBtn.innerText = "All Trees"
    allBtn.className = "hover:bg-gray-700 hover:text-white mr-15 px-5 py-2 rounded-md cursor-pointer "
    allBtn.onclick = loadAllTrees
    levelCategories.appendChild(allBtn)

    // Add category buttons
    catagorys.forEach(catagory => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
            <button onclick="loadTree(${catagory.id})"
                class="hover:bg-gray-700 hover:text-white px-5 py-2 rounded-md cursor-pointer">
                ${catagory.category_name}
            </button>
        `
        levelCategories.appendChild(btnDiv)
    })
}

loadCatagorys()
loadAllTrees()


