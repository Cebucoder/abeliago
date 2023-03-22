let carts = [
	// {
	// 	productImg: "./product/prod1.jpg",
	// 	productName: "UNRESOLVED ISSUES",
	// 	productPrice: 400
	// }
	
];

// adding the item to array
function addToCart(img,name,price){
	
	let cartStorages = JSON.parse(localStorage.getItem("cartStorage")) || [];

	// Add the new item to the array
  	cartStorages.push({ productImg: img, productName: name, productPrice: price });
	// JSON.tringify is to allow you red the the inide the array without jason.stringiy the reslt is object object
	localStorage.setItem("cartStorage", JSON.stringify(cartStorages));
	// showCarts();
}


let cartStorages = JSON.parse(localStorage.getItem("cartStorage")) || [];
let cartContainer = document.getElementById("cartItems");
cartContainer.innerHTML = "";

function showCarts(){

	
	// let img
	// adding the amount
	// let totalAmount = 0;
	// let itemNumber = 0;
	// let localStorage = "none";
	// getting the  items from a local storage and coberted to object using JSON.parse
	cartContainer.innerHTML = "";
	cartStorages.forEach(function(cartItems){
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

	// 	itemNumber++;

	// 	// adding the mount
	// 	totalAmount += Number(cartItems.productPrice);
	// });
	// // alert("Total Amount:"+totalAmount);
	// document.getElementById("total").innerHTML = "₱"+totalAmount.toLocaleString();
});

}