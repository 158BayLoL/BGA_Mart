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



];

function convertVND(money) {
  var x = money;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
}
