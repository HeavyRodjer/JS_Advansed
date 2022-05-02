import { v4 as uuidv4 } from "uuid"; //Модуль для генерування ID

export default {
  //Метод для зчитування списку товарів (масиву об"єктів-товарів) з localStorage
  readProducts: function () {
    if (localStorage.getItem("productsList"))
      return JSON.parse(localStorage.getItem("productsList"));
    else return [];
  },
  //Метод для запису списку товарів у  localStorage
  writeProducts: function (products) {
    localStorage.setItem("productsList", JSON.stringify(products));
  },
  //Метод для додавання нового товару до списку у localStorage
  addProduct: function (productTitle,productUrl, productPrice) {
    //Створюємо новий об"єкт-товар
    const product = {
      id: uuidv4(),
      title: productTitle,
      url: productUrl,
      price: productPrice,
    };
    let productsList = this.readProducts(); 
    productsList.push(product); 
    this.writeProducts(productsList); 
  },

  updateProduct(product) {
    let productsList = this.readProducts(); 
    const productIndex = productsList.findIndex(
      (title) => title.id === product.id
    );
    if (productIndex >= 0)
      productsList[productIndex] = {
        ...product,
      };
    this.writeProducts(productsList); 
  },
  getProductById(id) {
    let productsList = this.readProducts();  
    return productsList.find((title) => title.id === id);
  },
};
