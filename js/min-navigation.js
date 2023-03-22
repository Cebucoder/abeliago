let menu = document.getElementById('menu-container');
let menuIcon = document.getElementById('menu-icon');
function showMenu(){
	menu.classList.toggle('show-menu-container');
	menuIcon.classList.toggle('togmenu');
}


let cart = document.getElementById('cart-container');
let cartIcon = document.getElementById('cart-icon');
function showCart() {
	cart.classList.toggle('show-cart-container');
	cartIcon.classList.toggle('togcart');
}
