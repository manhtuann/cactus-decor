const listProduct = [
    {   
        name:'Queen of The Night Cactus',
        bg: './img/img-cart/item1-1.webp' ,
        Pri: '$13.50',
    },
    {   
        name:'Echeveria',
        bg: './img/img-cart/item2-1.webp' ,
        Pri: '$30.00',
    },
    {   
        name:'Blue Myrtle Cactus',
        bg: './img/img-cart/item3-1.webp' ,
        Pri: '$20.00',
    },
    {   
        name:'Ladyfinger Cactus',
        bg: './img/img-cart/item4-1.webp' ,
        Pri: '$20.00',
    },
    {   
        name:'String of Hearts',
        bg: './img/img-cart/item5-1.webp' ,
        Pri: '$10.00',
    },
    {   
        name:'Aloe Vera',
        bg: './img/img-cart/item6.webp' ,
        Pri: '$23.00',
    },
    {   
        name:'Crassula Ovata',
        bg: './img/img-cart/item7.webp' ,
        Pri: '$20.00',
    },
    {   
        name:'Mistletoe Cactus',
        bg: './img/img-cart/item8.webp' ,
        Pri: '$20.00',
    },
    {   
        name:'Dolphin Succulents',
        bg: './img/img-cart/item9.webp' ,
        Pri: '$20.00',
    },
];

const allProduct = document.querySelector('.product-list');

let allProductHtml = '';

listProduct.forEach(function (el) {
    allProductHtml += `
    <div class="product">
        <a href=""><img src="${el.bg}" alt="">
        <div class="p-details">
            <h2>${el.name}</h2>
            <h3>${el.Pri}</h3>
        </div>
        </a>
    </div>`;
    
});

allProduct.innerHTML = allProductHtml;



const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItiems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");

    for(let i=0; i <pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}


const openSearch = document.querySelector("#search-item");
const pList = document.querySelector(".wrapper");

openSearch.addEventListener("click", () => {
    openSearch.classList.toggle("active");
    pList.classList.toggle("active");
})

document.querySelectorAll(".product").forEach(n => n.addEventListener("click", () => {
    openSearch.classList.remove("active");
    pList.classList.remove("active")
}));