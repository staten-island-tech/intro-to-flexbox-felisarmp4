let container = document.querySelector("#product-list");
let all = document.querySelector(".filterbtn-all");
let fruit = document.querySelector(".filterbtn-fruit");
let drink = document.querySelector(".filterbtn-drink");
let baked = document.querySelector(".filterbtn-baked");
let snack = document.querySelector(".filterbtn-snack");
let cart = [];
let total = 0;
const products = [
  {
    name: "full lemon",
    price: 0.99,
    img: "1.png",
    type: "fresh fruit",
  },
  {
    name: "full lime",
    price: 0.99,
    img: "2.png",
    type: "fresh fruit",
  },
  {
    name: "full lemon and a slice",
    price: 1.39,
    img: "3.png",
    type: "fresh fruit",
  },
  {
    name: "full lime and a slice",
    price: 1.39,
    img: "4.png",
    type: "fresh fruit",
  },
  {
    name: "crate of lemons",
    price: 44.99,
    img: "5.png",
    type: "fresh fruit",
  },
  {
    name: "crate of limes",
    price: 44.99,
    img: "6.png",
    type: "fresh fruit",
  },
  {
    name: "lemon meringue pie",
    price: 4.99,
    img: "7.png",
    type: "baked goods",
  },
  {
    name: "key lime pie",
    price: 4.99,
    img: "8.png",
    type: "baked goods",
  },
  {
    name: "lemonade",
    price: 3.99,
    img: "9.png",
    type: "drinks",
  },
  {
    name: "limeade",
    price: 3.99,
    img: "10.png",
    type: "drinks",
  },
  {
    name: "lemon pound cake",
    price: 14.99,
    img: "11.png",
    type: "baked goods",
  },
  {
    name: "key lime pound cake",
    price: 14.99,
    img: "12.png",
    type: "baked goods",
  },
  {
    name: "outshine lemon fruit bars",
    price: 5.99,
    img: "13.png",
    type: "sweets and snacks",
  },
  {
    name: "outshine lime fruit bars",
    price: 5.99,
    img: "14.png",
    type: "sweets and snacks",
  },
  {
    name: "lemon drops",
    price: 1.99,
    img: "15.png",
    type: "sweets and snacks",
  },
  {
    name: "lime drops",
    price: 1.99,
    img: "16.png",
    type: "sweets and snacks",
  },
  {
    name: "lemon drop jello shots",
    price: 3.99,
    img: "17.png",
    type: "sweets and snacks",
  },
  {
    name: "lime drop jello shots",
    price: 3.99,
    img: "18.png",
    type: "sweets and snacks",
  },
  {
    name: "lemon macarons",
    price: 19.99,
    img: "19.png",
    type: "baked goods",
  },
  {
    name: "lime macarons",
    price: 19.99,
    img: "20.png",
    type: "baked goods",
  },
];

function showProducts(filtertype) {
  container.innerHTML = "";
  products.forEach((product) => {
    if (filtertype === "all" || product.type === filtertype) {
      container.innerHTML += `
          <div class="display-card" display-name="${product.name}">
            <img class="display-img" src="${product.img}" alt="${product.name}">
            <h2 class="display-name">${product.name}</h2>
            <h3 class="display-price">$${product.price}</h3>
            <button class="add-btn">add item</button>
          </div>
        `;
    }
  });
  addtocart();
}

showProducts("all");

all.addEventListener("click", () => showProducts("all"));
fruit.addEventListener("click", () => showProducts("fresh fruit"));
drink.addEventListener("click", () => showProducts("drinks"));
baked.addEventListener("click", () => showProducts("baked goods"));
snack.addEventListener("click", () => showProducts("sweets and snacks"));

function addtocart() {
  document.querySelectorAll(".add-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const addproduct = event.target
        .closest(".display-card")
        .getAttribute("display-name");
      const productobj = products.find((item) => item.name === addproduct);
      cart.push(productobj);
      console.log(cart);
    });
  });
}

const cartbtn = document.querySelector(".cartbtn");
cartbtn.addEventListener("click", showcart);

function showcart() {
  container.innerHTML = "";

  cart.forEach((product) => {
    container.innerHTML += `
      <div class="display-card" display-name="${product.name}">
        <img class="display-img" src="${product.img}" alt="${product.name}">
        <h2 class="display-name">${product.name}</h2>
        <h3 class="display-price">$${product.price}</h3>
      </div>
    `;
  });

  container.innerHTML += `
    <div class="total-display-div">
    <div>total: <span class="total-display">$0.00</span></div>
    </div>
  `;

  price();
}

function price() {
  total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  document.querySelector(".total-display").textContent = `$${total.toFixed(2)}`;
}
