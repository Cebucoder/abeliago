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

let success = document.getElementById("success");
  success.classList.add("show-success");
setTimeout(() => {

    success.classList.remove("show-success");
}, 2000);
}


let cartContainer = document.getElementById("cartItems");

function showCarts() {
  // Clear the cart container
  cartContainer.innerHTML = "";

  // Initialize the itemNumber variable to 0
  let itemNumber = 0;

  // Iterate over the items in the cart and add them to the display
  carts.forEach(function(cartItems) {
    // Increment the itemNumber for each item in the cart
    itemNumber++;

    cartContainer.innerHTML +=
      `
      <li>
        <div class="cart-img">
          <a href= "cart.html"><img src="${cartItems.productImg}"></a>
        </div>
        <div class="item-name">
          <a href="cart.html"><label>${cartItems.productName}</label></a>
        </div>
        <span class="item-price" id="price">₱ ${cartItems.productPrice.toLocaleString()}</span>
        <span class="trash" onclick="removeItem(${itemNumber - 1})"><ion-icon name="trash-outline"></ion-icon></span>
      </li>
      `;

  });

  // Calculate the total and display it
  let totalAmount = 0;
  let cartCount = 0;
  carts.forEach(function(cartItems) {
    totalAmount += Number(cartItems.productPrice);
  });
  document.getElementById("total").innerHTML = "₱" + totalAmount.toLocaleString();
  document.getElementById("cart-count").innerHTML  = itemNumber++;
}


// Load the cart from localStorage when the page is loaded
carts = JSON.parse(localStorage.getItem("cartStorage")) || [];

// Display the cart
showCarts();


function removeItem(itemNumber) {
  let cartStorages = JSON.parse(localStorage.getItem("cartStorage")) || [];
  cartStorages.splice(itemNumber, 1);
  localStorage.setItem("cartStorage", JSON.stringify(cartStorages));
  carts = cartStorages;
  showCarts();
  let success = document.getElementById("delete");
  success.classList.add("show-success");
setTimeout(() => {

    success.classList.remove("show-success");
},1000);
}







// // Adding quantity


  
