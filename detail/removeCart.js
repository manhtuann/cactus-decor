function removeCart(a){
    var dlt = a.parentElement.parentElement;
    var name = dlt.children[2].innerText;
    dlt.remove();
    for(let i =0; i<cart.length; i++){
        if(cart[i][2] == name){
            cart.slice(i,1)
        }
    }
    viewCart();

}
// removeCart()
