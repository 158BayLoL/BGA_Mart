const ShopItemsData = [
  
  {
    id: 1,
    name: "Nước khoáng thiên nhiên Lavie 500ml",
    price: 5000,
    image: "../img/Nước khoáng thiên nhiên Lavie 500ml.png",
  },

  {
    id: 2,
    name: "Nước ngọt C2 trà xanh vị chanh 455ml",
    price: 10000,
    image: "../img/Nước ngọt C2 chanh trà xanh 455ml.jpg",
  },

  {
    id: 3,
    name: "Nước ngọt trà Ô Long Tea+ 455ml",
    price: 10000,
    image: "../img/Nước ngọt trà Ô Long Tea+.png",
  },

  {
    id: 4,
    name: "Nước ngọt vị chanh Sprite 1.5l",
    price: 15000,
    image: "../img/Nước ngọt vị chanh Sprite 1.5l.jpg",
  },

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

  {
    id: 9,
    name: "Gói dao cạo râu Gillette Blue 2 Flexi 10+5 cái",
    price: 84000,
    image: "../img/Gói dao cạo râu Gillette Blue 2 Flexi 10+5 cái.jpg",
  },

  {
    id: 10,
    name: "Dầu gội sạch gàu Head & Shoulders bạc hà mát rượi 625ml",
    price: 90000,
    image: "../img/Dầu gội sạch gàu Head & Shoulders bạc hà mát rượi 625ml.jpg",
  },
];

function convertVND(money) {
  var x = money;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
}
