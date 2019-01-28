// // Задача 1.


let products = {
    price: 13,
    num: 5
  }
  
  function getTotal() {
    return this.price * this.num;
  };
  
  
  
  
  // // Задача 2.


  let detals = {
    price: 27,
    num: 4
  }
    
  let totalDetals = products.getTotal.call(detals);

  
  
  // // Задача 3.

  
  let sizes = {width: 5, height: 10};
  getSquare = function () {return this.width * this.height};
  
  let newSquare = getSquare.call(sizes);
  
  newSquare();

  
  
  // // Задача 4.
  
  
  let element = {
      height: 25,
      getHeight: function () {return this.height;}
  };
  
  let getElementHeight = element.getHeight.bind(element);
  
  
  getElementHeight();
  