const products = [
    { name: "full lemon", price: 0.99, img: "1.png", type: "fresh fruit"},
    { name: "full lime", price: 0.99, img: "2.png", type: "fresh fruit"},
    { name: "full lemon and a slice", price: 1.39, img: "3.png", type: "fresh fruit"},
    { name: "full lime and a slice", price: 1.39, img: "4.png", type: "fresh fruit"},
    { name: "crate of lemons", price: 44.99, img: "5.png", type: "fresh fruit"},
    { name: "crate of limes", price: 44.99, img: "6.png", type: "fresh fruit"},
    { name: "lemon meringue pie", price: 4.99, img: "7.png", type: "baked goods"},
    { name: "key lime pie", price: 4.99, img: "8.png", type: "baked goods"},
    { name: "lemonade", price: 3.99, img: "9.png", type: "drinks"},
    { name: "limeade", price: 3.99, img: "10.png", type: "drinks"},
    { name: "lemon pound cake", price: 14.99, img: "11.png", type: "baked goods"},
    { name: "key lime pound cake", price: 14.99, img: "12.png", type: "baked goods"},
    { name: "outshine lemon fruit bars", price: 5.99, img: "13.png", type: "sweets and snacks"},
    { name: "outshine lime fruit bars", price: 5.99, img: "14.png", type: "sweets and snacks"},
    { name: "lemon drops", price: 1.99, img: "15.png", type: "sweets and snacks"},
    { name: "lime drops", price: 1.99, img: "16.png", type: "sweets and snacks"},
    { name: "lemon drop jello shots", price: 3.99, img: "17.png", type: "sweets and snacks"},
    { name: "lime drop jello shots", price: 3.99, img: "18.png", type: "sweets and snacks"},
    { name: "lemon macarons", price: 19.99, img: "19.png", type: "baked goods"},
    { name: "lime macarons", price: 19.99, img: "20.png", type: "baked goods"}
];
const container = document.getElementById('product-list');


products.forEach(product => {

  container.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
      <img class="display-img" src="${product.img}" alt="${product.name}">
      <h2 class="display-name">${product.name}</h2>
      <h3 class="price">$${product.price.toFixed(2)}</h3>
      <button class="add-btn">add item</button>
    </div>`
  );
});

