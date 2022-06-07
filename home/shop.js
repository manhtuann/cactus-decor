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
    

    <div class="item-image" >
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
// { style="background-image: url('${el.bg}');"  }
allItem.innerHTML = allItemHtml;

// chat-box

const openChat = document.querySelector(".let-chat");
const chatBox = document.querySelector(".chat-box");

openChat.addEventListener("click", () => {
    openChat.classList.toggle("active");
    chatBox.classList.toggle("active");
})

document.querySelector(".close-chatbox").addEventListener("click", () => {
    openChat.classList.remove("active");
    chatBox.classList.remove("active");
})