// function renderJs() {
//     let result = '';
//     let menu = document.querySelector('.menu')
//     arr.forEach(item => {
//         result += `
//         <div>
//             <div class="name">
//             <a href="detail.html?id=${item.id}">${item.name}</a>
//             </div>
//             <img src=${item.img} alt="">
//             <h1 class="title">${item.price}</h1>
//             <input class="input" type="number" min="1" max="999" pattern="[0-9]*" value="1">
//             <button onclick="addCart(this)">thêm giỏ hàng</button>
//         </div>`
//         menu.innerHTML = result
//     })
// }
// renderJs()
var cart = [];


function addCart(a) {
    var boxsp = a.parentElement.children;
    var img = boxsp[1].src;
    var price = boxsp[2].innerText;
    var name = boxsp[0].innerText;
    var sl = boxsp[3].value;
    var sp = new Array(img, price, name, sl)
    cart.push(sp)
    showCart()

    // lưu giỏ hàng

    sessionStorage.setItem('cart',JSON.stringify(cart));
}
function showCart() {
    document.getElementById('countsp').innerHTML = cart.length;
}




