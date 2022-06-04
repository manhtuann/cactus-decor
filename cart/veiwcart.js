ready()
function ready() {
    const removeCartButtons = document.getElementsByClassName('cart-remove');

    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItems)
    }

    //change quantity
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", updatetotal);
    }
}

function removeCartItems(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
}

function updatetotal() {
    let total = 0;


    let priceElement = document.getElementsByClassName('product-price')[0];

    //ep kieu
    let price = parseFloat(priceElement.innerText.replace("$", ""));

    let quantityElement = document.getElementsByClassName('cart-quantity')[0].value;

    total = total + (price * quantityElement);

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

function viewCart(){
    var gh = sessionStorage.getItem('cart')
    var cart = JSON.parse(gh)
    var result ='';
    for(let i =0; i< cart.length; i++) {
        result += `
        <div class="cart-content">
        <div class="product">
            <img src="./cacti/cacti1.webp" alt="" class="cart-img">
            <div class="product-box">
                <div class="cart-product-title">I'm a product</div>
                <div class="cart-price">${cart[i][1]}</div>
            </div>
            <input type="number" min="1" value="1" class="cart-quantity">
            <div class="product-price">${cart[i][1]}</div>
            <i class='bx bx-x-circle bx-flip-vertical cart-remove' style="font-size: 28px ; cursor: pointer;"></i>
        </div>
    </div> 
        `
    }
    
    document.getElementById('render').innerHTML = result;
}
viewCart()
let total = 0;
let cartBoxes = document.getElementsByClassName('product')
for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i]
    let priceElement = cartBox.getElementsByClassName('product-price')[0]

    //ep kieu
    let price = parseFloat(priceElement.innerText.replace("$", ""))

    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
    console.log(cartBox.getElementsByClassName("cart-quantity"));


    let quantity = quantityElement.value
    console.log(typeof quantity);


    total = total + (price * quantity)

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}