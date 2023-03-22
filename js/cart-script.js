let carts = [];

// adding the item to array
function addToCart(img,name,price){
	let cartStorages = JSON.parse(localStorage.getItem("cartStorage")) || [];

	// Add the new item to the array
	cartStorages.push({ productImg: img, productName: name, productPrice: price });
	// JSON.stringify is used to allow you to read the contents of the array
	localStorage.setItem("cartStorage", JSON.stringify(cartStorages));

	// Update the carts variable
	carts = cartStorages;

	// Update the cart display
	showCarts();
}


let cartContainer = document.getElementById("cartItems");

function showCarts(){
	// Clear the cart container
	cartContainer.innerHTML = "";

	// Iterate over the items in the cart and add them to the display
	carts.forEach(function(cartItems){
		cartContainer.innerHTML +=
			`
			<li>
				<div class="cart-img">
					<img src="${cartItems.productImg}">
				</div>
				<div class="item-name">
					<label>${cartItems.productName}</label>
				</div>
				<span class="item-price">${cartItems.productPrice}</span>
			</li>
			`;
	});

	// Calculate the total and display it
	let totalAmount = 0;
	carts.forEach(function(cartItems){
		totalAmount += Number(cartItems.productPrice);
	});
	document.getElementById("total").innerHTML = "₱"+totalAmount.toLocaleString();
}

// Load the cart from localStorage when the page is loaded
carts = JSON.parse(localStorage.getItem("cartStorage")) || [];

// Display the cart
showCarts();
