
let param = new URLSearchParams(window.location.search);
let id = param.get('id');


function handles() {
    let flag = -1;
    let container = document.querySelector('.container');
    for (let i = 0; i < listCart.length; i++) {
        if (listCart[i].id == id) {
            flag = i ;
            container.innerHTML = `
            <div class="link-product">
            Home/Plants/I'm a product
        </div>
        
        <div class="detail-product">
            <div class="img-product">
                <div class="img">
                    <img class="img1" src=${listCart[flag].bg} alt="">
                </div>
        
                <div class="img-smail">
                    <div  class="img-smail-item ">
                        <img class="sml-item" src="https://static.wixstatic.com/media/697bc8_682a294371534e70b3504ca2341009e1~mv2_d_1920_1920_s_2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/697bc8_682a294371534e70b3504ca2341009e1~mv2_d_1920_1920_s_2.webp" alt="">
                    </div>
                    <div  class="img-smail-item ">
                        <img class="sml-item" src="https://static.wixstatic.com/media/697bc8_71c164891c634fb7862f60a22a2a90f9~mv2_d_1920_1920_s_2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/697bc8_71c164891c634fb7862f60a22a2a90f9~mv2_d_1920_1920_s_2.webp" alt="">
                    </div>
                </div>
                <div class="title-img">
                    <p>${listCart[flag].detail}</p>
                </div>
        
            </div>
            <div class="information-product">
                <div class="product-detail">
                    <h1 class="title">${listCart[flag].name}</h1>
                    <span class="id-product">${listCart[flag].sku}</span>
                </div>
                <div class="price-1">
                    <p class="price-old">${listCart[flag].oldPri}</p>
                    <p class="price-new">${listCart[flag].newPri}</p>
                </div>
                <p class="quantity">Quantity</p>
                <input class="input" type="number" min="1" max="999" pattern="[0-9]*" value="1">
                <div class="btn btn-up">
                    <button class="btn-cart" onclick='addCart(this)'>Add to Cart</button>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" class="_1vD2j _2_JeV" data-hook="wishlist-button-icon"><path d="M8.1816,5.0039 C7.9276,5.0039 7.6696,5.0279 7.4106,5.0759 C5.7326,5.3909 4.3566,6.8479 4.0646,8.6189 C3.9346,9.4039 4.0036,10.2029 4.2616,10.9319 C4.2636,10.9379 4.2656,10.9439 4.2676,10.9499 C5.1716,13.8579 10.2066,17.4019 11.7286,18.4189 C11.8966,18.5329 12.1076,18.5309 12.2746,18.4189 C13.7956,17.4019 18.8266,13.8589 19.7326,10.9499 C19.9966,10.2029 20.0646,9.4039 19.9356,8.6189 C19.6426,6.8479 18.2666,5.3909 16.5896,5.0759 C14.9596,4.7749 13.3646,5.4459 12.4126,6.8369 C12.2256,7.1099 11.7736,7.1099 11.5876,6.8369 C10.7866,5.6669 9.5276,5.0039 8.1816,5.0039 M12.0016,19.5029 C11.7136,19.5029 11.4246,19.4189 11.1726,19.2509 C9.1366,17.8899 4.2966,14.3869 3.3156,11.2559 C3.0036,10.3719 2.9216,9.4039 3.0776,8.4569 C3.4436,6.2429 5.1106,4.4889 7.2266,4.0939 C9.0226,3.7539 10.8006,4.3809 11.9996,5.7409 C13.1996,4.3829 14.9766,3.7569 16.7736,4.0939 C18.8896,4.4899 20.5566,6.2429 20.9216,8.4569 C21.0786,9.4069 20.9956,10.3789 20.6816,11.2659 C19.7116,14.3819 14.8676,17.8889 12.8306,19.2509 C12.5786,19.4189 12.2896,19.5029 12.0016,19.5029" fill-rule="evenodd"></path></svg>
                </div>
                <div class="btn">
                    <button class="btn-buy">Buy Now</button>
                </div>
        
                <div class="desc">
                </div>
            </div>
        </div>
        <div class="related-product">
            <span class="title-product">RELATED PRODUCT</span>
            
            <ul class="list-item" id="list">
            </ul>
            
        </div>
            `
        }
    }



}

handles()