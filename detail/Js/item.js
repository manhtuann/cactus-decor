// const item = [
//     {
//         id: 1,
//         name: "I'm a product",
//         img: "https://static.wixstatic.com/media/697bc8_682a294371534e70b3504ca2341009e1~mv2_d_1920_1920_s_2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/697bc8_682a294371534e70b3504ca2341009e1~mv2_d_1920_1920_s_2.webp",
//         price: '$10.00'
//     },
//     {
//         id: 2,
//         name: "I'm a product",
//         img: "https://static.wixstatic.com/media/697bc8_471814af954e42df8d88ee8d8d63e557~mv2_d_1920_1920_s_2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/697bc8_471814af954e42df8d88ee8d8d63e557~mv2_d_1920_1920_s_2.webp",
//         price: '$15.00'
//     },
//     {
//         id: 3,
//         name: "I'm a product",
//         img: "https://static.wixstatic.com/media/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.webp",
//         price: "$18.00"
//     },
//     {
//         id: 4,
//         name: "I'm a product",
//         img: "https://static.wixstatic.com/media/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.webp",
//         price: "$25.00"
//     },
//     {
//         id: 5,
//         name: "I'm a product",
//         img: "https://static.wixstatic.com/media/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.jpg/v1/fill/w_270,h_270,al_c,q_80,usm_0.66_1.00_0.01/697bc8_1a4fc29505ca44b7b3742e2e0ab5fda3~mv2_d_1920_1920_s_2.webp",
//         price: "$3.00"
//     }

// ]
// const detail = [
//     {
//         title: 'PRODUCT INFO',
//         desc: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item."
//     },
//     {
//         title: 'RETURN & REFUND POLICY',
//         desc: "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
//     },
//     {
//         title: 'SHIPPING INFO',
//         desc: "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."
//     },
// ]



let desc = document.querySelector(".desc");
let descHtml = '';
detail.forEach(function (e) {
    descHtml += `
            <div class="product-info">
            <div class="wrap">
                <p>${e.title}</p>
            <span class="more">+</span>
            <span class="hide">-</span>
            </div>
            <p class="active">${e.desc}</p>
            </div>`
})
desc.innerHTML = descHtml;

let items = document.querySelector('#list');
let itemHtml = '';

listCart.forEach(e => {
    itemHtml += `
        <li class="item">
        <img src=${e.bg} alt="">
        <div class="name-product">
            <span>${e.name}</span>
            <p class="price-new">${e.newPri}</p>
        </div>
    </li>
    `
})
items.innerHTML = itemHtml


