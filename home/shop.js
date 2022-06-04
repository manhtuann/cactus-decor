
// search-box

const searchWrapper = document.querySelector(".search-cont");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".ti-search");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); 
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
};



const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}));



const allItem = document.querySelector('#all-item');

let allItemHtml = '';

listCart.forEach(function (el) {
    allItemHtml += `
    <div class="item-cont">
    <span class="best-seller">${el.title}</span>
    

    <div class="item-image">
    <img src=${el.bg}>
    <a href='../detail/detail.html?id=${el.id}'><div class="quick-view">Quick View</div></a>
    
    </div>
    <p>${el.name}</p>
    <div class="price">
        <div class="old-pri"><del>${el.oldPri}</del></div>
        <div class="new-pri">${el.newPri}</div>
    </div>
    <button class="add" onclick='addCart(this)'>Add to Cart</button>
    </div>`;
    
});

allItem.innerHTML = allItemHtml;