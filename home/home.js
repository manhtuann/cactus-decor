
// item-colection

const list = [
    {
        img: '../img/cacti.webp' ,
        tittle:'cacti',
    },
    {
        img: '../img/plants.jpg' ,
        tittle:'plants',
    },
    {
        img: '../img/succulents.webp' ,
        tittle:'succulents',
    },
];

const item = document.querySelector('#item');

let itemHtml = '';

list.forEach(function (el) {
    itemHtml += `<div class="item-img item1" style="background-image: url('${el.img}');">
    <h2>${el.tittle}</h2>
    <p class="minus">--</p>
    <button class="btn1">Shop Collection</button>
    </div>`;
});

item.innerHTML = itemHtml;

// phone-cont swap

let i=1;
changeText = function(){
    let texts =['Call Us Now! 123-456-7890','We Deliver to Your Doorste'];
    document.querySelector('.text-1').innerHTML = texts[i];
    i++;
    if(i==2){
        i=0;
    }
}

setInterval(changeText,3000)

// search-box


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

 
