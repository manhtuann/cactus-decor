

const allProduct = document.querySelector('.product-list');

let allProductHtml = '';

listCart.forEach(function (el) {
    allProductHtml += `
    <div class="product">
        <a href="../detail/detail.html?id=${el.id}"><img src="${el.bg}" alt="">
        <div class="p-details">
            <h2>${el.name}</h2>
            <h3>${el.newPri}</h3>
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