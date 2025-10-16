const products = [
    { name: "full lemon", price: 0.99, img: "1.png"},
    { name: "full lime", price: 0.99, img: "2.png"},
    { name: "full lemon and a slice", price: 1.39, img: "3.png"},
    { name: "full lime and a slice", price: 1.39, img: "4.png"},
    { name: "crate of lemons", price: 44.99, img: "5.png"},
    { name: "crate of limes", price: 44.99, img: "6.png"},
    { name: "lemon meringue pie", price: 4.99, img: "7.png"},
    { name: "key lime pie", price: 4.99, img: "8.png"},
    { name: "lemonade", price: 3.99, img: "9.png"},
    { name: "limeade", price: 3.99, img: "10.png"},
    { name: "lemon pound cake", price: 14.99, img: "11.png"},
    { name: "key lime pound cake", price: 14.99, img: "12.png"},
    { name: "outshine lemon fruit bars", price: 5.99, img: "13.png"},
    { name: "outshine lime fruit bars", price: 5.99, img: "14.png"},
    { name: "lemon drops", price: 1.99, img: "15.png"},
    { name: "lime drops", price: 1.99, img: "16.png"},
    { name: "lemon drop jello shots", price: 3.99, img: "17.png"},
    { name: "lime drop jello shots", price: 3.99, img: "18.png"},
    { name: "lemon macarons", price: 19.99, img: "19.png"},
    { name: "lime macarons", price: 19.99, img: "20.png"}
];
const container = document.querySelector('.container');


products.forEach(product => {
   inject(product);
})

 function inject(product) {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
      <img class="display-img" src="${product.img}"/>
      <h2 class="display-name">${product.name}</h2>
      <h3 class="display-price">${product.price}</h3>
      <button class="add btn">add item</button>
    </div>`
  );
}
