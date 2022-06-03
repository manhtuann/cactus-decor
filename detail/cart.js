function viewCart(){
    var gh = sessionStorage.getItem('cart')
    var cart = JSON.parse(gh)
    var result ='';
    var sum = 0;
    for(let i =0; i< cart.length; i++) {
        var tt = parseInt(cart[i][1]) * parseInt(cart[i][3]);
        sum += tt;
        result += `
        <tr>
        <td class="hidden-xs">
            <a href="#">
                <img src=${cart[i][0]}
                    alt="Age Of Wisdom Tan Graphic Tee" title="" width="47" height="47">
            </a>
        </td>
        <td><a href="#">${cart[i][2]}</a>
        </td>


        <td>
            <div class="input-group bootstrap-touchspin">
                <span class="input-group-btn">
                    </span><span
                    class="input-group-addon bootstrap-touchspin-prefix"
                    style="display: none;"></span><input type="text" name="" value=${cart[i][3]}
                    class="input-qty form-control text-center" style="display: block;"><span
                    class="input-group-addon bootstrap-touchspin-postfix"
                    style="display: none;"></span><span class="input-group-btn"></span></div>
        </td>
        <td class="price">${cart[i][1]}</td>
        <td>${tt}</td>
        <td class="text-center">
            <a href="#" onclick={removeCart(this)} class="remove_cart" rel="2">
                <i class="fa fa-trash-o"></i>
            </a>
        </td>
    </tr>
        `
        result += `
        <tr>
            <td colspan="4" align="right">Total</td>
            <td class="total" colspan="2"><b>${sum}</b>
            </td>
        </tr> 
        `
    }
    document.getElementById('main').innerHTML = result;
}
viewCart()