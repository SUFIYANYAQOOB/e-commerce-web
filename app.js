function myfunction(){
    arr = [];
    var obj = {
        name: document.getElementById('name').value,
        passward: document.getElementById('passward').value,
        email: document.getElementById('email').value
    }
    arr.push(obj);
    console.log(arr,obj)
   
    
    localStorage.setItem("name",obj.name);
    localStorage.setItem("passward",obj.passward);
    localStorage.setItem("email",obj.email);

    var name = localStorage.getItem("name");
    var passward = localStorage.getItem("passward");
    var email = localStorage.getItem("email");

        if (!name || !passward || !email) {
        alert("Please fill out all fields."); 
    };

    
    console.log(name);
    console.log(passward);
    console.log(email);


    document.getElementById("name").innerHTML = "name";
    document.getElementById("passward").innerHTML = "passward";
    document.getElementById("email").innerHTML = "email";

    if (name || passward ||  email) {
        alert("SING UP:SUCCESS FULLY"); 
    };
    window.location.href = "login.html"; 
    
}
//login page:
function mylogin() {
    var email = document.getElementById('email').value;
    var passward = document.getElementById('passward').value;

    if (!email || !passward) {
        alert("Please fill out all fields.");
    }
    
    var storedEmail = localStorage.getItem("email");
    var storedPassward = localStorage.getItem("passward");
    
    if (email === storedEmail && passward === storedPassward) {
        alert("LOGIN: SUCCESSFULLY");

    } else {
        alert("Invalid email or password. Please try again.");
    }
    window.location.href = "index.html"; 
}


const buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      
        const productCard = buttons[i].closest('.product-card'); 
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        const productImage = productCard.querySelector('img').src;

        // Create a product object
        const product = { name: productName, price: productPrice, image: productImage };

        // Retrieve existing cart items from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new product to the cart
        cart.push(product);

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Alert the user
        alert(`${productName} has been added to your cart!`);
    });
}



// Get the cart container element
// const cartContainer = document.getElementById('cart-items');

// // Retrieve the cart items from localStorage
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Check if the cart is empty
// if (cart.length === 0) {
//   cartContainer.innerHTML = '<p>Your cart is empty.</p>';
// } 

// else {
//   // Iterate through the cart items and display them
//   cart.forEach((product) => {
//     // Create a container for each product
//     const productDiv = document.createElement('div');
//         productDiv.classList.add('cart-item');
        
//         // Add product details to the container
//         productDiv.innerHTML = `
//         <img src="${product.image}" alt="${product.name}" width="100">
//         <h3>${product.name}</h3>
//         <p>Price: ${product.price}</p>
//         `;
//         // Append the product container to the cart
//         cartContainer.appendChild(productDiv);
//       });
// }



// localStorage.clear();