const products = {
  name: "iPhone",
  price: 80000,
  isIphone: true,
  isDiscount: function (discount) {
    return this.price - discount;
  },
  phoneItems: ["headphone", "charger", "powerbank", "backcover"],
  location: {
    houseNumber: "1/2 A",
    block: "2A",
    roadNumber: "708-kdamtuli",
  },
  productsItems: function (items, location) {
    return `${this.name} is buy and gift ${items}. And store house number ${this.location.houseNumber}.`;
  },
};

const discountPrice = products.isDiscount(1000);
// console.log(discountPrice);

const phoneItemsShow = products.phoneItems[2];
// console.log(phoneItemsShow);

const { location, phoneItems } = products;
const { houseNumber, block, roadNumber } = location;
// console.log(houseNumber, block, roadNumber);

const productsItemsShow = products.productsItems(phoneItems[2]);
console.log(productsItemsShow);
