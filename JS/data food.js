const ShopItemsData = [
  {
    id: 5,
    name: "Hộp bánh Chocopie đậm vị cacao 360g",
    price: 60000,
    image: "../img/Hộp bánh Chocopie đậm vị cacao 360g.png",
  },

  {
    id: 6,
    name: "Hộp bánh xốp Nabati nhân Chocolate 300g",
    price: 40000,
    image: "../img/Hộp bánh xốp Nabati nhân Chocolate 300g.jpg",
  },

  {
    id: 7,
    name: "Snack khoai tây Lay's vị Phở bò Hà Nội 88g",
    price: 10000,
    image: "../img/Snack khoai tây Lay's vị Phở bò Hà Nội 88g.png",
  },

  {
    id: 8,
    name: "Snack khoai tây Lay's vị tự nhiên 150g",
    price: 20000,
    image: "../img/Snack khoai tây Lay's vị tự nhiên 150g.jpg",
  },

];

function convertVND(money) {
  var x = money;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
}
