const products = {
  name: "iPhone",
  price: 80000,
  isIphone: true,
  phoneItems: ["headphone", "charger", "powerbank", "backcover"],
  location: {
    houseNumber: "1/2 A",
    block: "2A",
    roadNumber: "708-kdamtuli",
  },
};

const { name, ...a } = products;
//
const { phoneItems } = products;
const [s, b, balance, c] = phoneItems;
// console.log(balance);
