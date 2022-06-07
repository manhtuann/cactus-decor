
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

                    <button class="btn-cart" onclick='detailAddCart(this)'>Add to Cart</button>


                

                
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