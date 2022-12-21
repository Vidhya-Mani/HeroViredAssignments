let deliver_div = document.querySelector(".deliver");
// console.log(deliver_div)
let returns_div = document.querySelector(".orders");
let subheader = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let cart = document.querySelector(".cart");
let child_of_subheader = subheader.children;
// console.log("child_of_subheader",child_of_subheader);


deliver_div.addEventListener("mouseover", (e) => {
    deliver_div.style.border = "1px solid white"
})


deliver_div.addEventListener("mouseout", (e) => {
    deliver_div.style.border = "none"
})


returns_div.addEventListener("mouseover", (e) => {
    returns_div.style.border = "1px solid white"
})

returns_div.addEventListener("mouseout", (e) => {
    returns_div.style.border = "none"
})

section5.addEventListener("mouseover", (e)=>{
    section5.style.border ="1px solid white"
})

section5.addEventListener("mouseout", (e)=>{
    section5.style.border ="none"
})

cart.addEventListener("mouseover", (e)=>{
    cart.style.border ="1px solid white"
})

cart.addEventListener("mouseout", (e)=>{
    cart.style.border = "none"
})

for (let i = 0; i < child_of_subheader.length; i++) {

    child_of_subheader[i].addEventListener("mouseover", (e) => {
        child_of_subheader[i].className = ''
        child_of_subheader[i].classList.add('hoverEffect')

    })
}
for (let i = 0; i < child_of_subheader.length; i++) {
    child_of_subheader[i].addEventListener("mouseout", (e) => {
        child_of_subheader[i].className = ''
        child_of_subheader[i].classList.add('hoverOut')

    })
}

// let fetch_someData = fetch("https://dummyjson.com/products");
// console.log(fetch_someData);

let container = document.querySelector(".container");

async function fetching_data() {
    try {
        let res = await fetch("https://dummyjson.com/products")
        let data = await res.json();
        let productArr = data.products;
        // console.log(productArr[0].title);
        console.log(productArr);
        productArr.map((ele) => {
            container.innerHTML = container.innerHTML + `
    <div class="card">
     <div class="image-card">
        <img src=${ele.thumbnail} alt=${ele.title} srcset="">
     </div>
     <div class="card-content">
       <span><b> ${ele.title}</b></span>
       <span>Brand:<i> ${ele.brand}</i></span>
       <span>Price: <b>${ele.price}</b></span>
       <span>Rating: <u>${ele.rating}</u></span>
     </div>
    </div>
    `
        })
    } catch (error) {
        console.log(error);
    }
}
fetching_data()