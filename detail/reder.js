
var cart = [];


function addCart(a) {
    var boxsp = a.parentElement.children;
    var img = boxsp[1].children[0].src;
    var price = boxsp[3].innerText;
    var name = boxsp[2].innerText;
    // var sl = boxsp[3].value;
    var sp = new Array(img, price, name)
    cart.push(sp)
    showCart()

    // lưu giỏ hàng

    sessionStorage.setItem('cart',JSON.stringify(cart));

}


function detailAddCart(a){
    var cartItem = a.parentElement.children; 
    var img = cartItem[1].children[0].src;
    var price = cartItem[1].innerText;
    var name = cartItem[0].children[0].innerText;
    var sp2 = new Array(img,price,name)
    cart.push(sp2)
    showCart()
    console.log(name);

    sessionStorage.setItem('cart',JSON.stringify(cart));

}
function showCart() {
    document.getElementById('countsp').innerHTML = cart.length;
}




