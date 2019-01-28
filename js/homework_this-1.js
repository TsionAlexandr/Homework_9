// // Задача 1.


const rectangle = {
    width: 10,
    height: 15       
} 
function getSquare () {
    return this.width * this.height
};





// // Задача 2.


let price = {
    price: 10,
    discount: "15%",   
}

function getPrice() {
    return this.price;
};
function getPriceWithDiscount() {
    return this.price * (100 - parseFloat(this.discount)) / 100;
};

price.getPrice(); 
price.getPriceWithDiscount(); 




// // Задача 3.


let object = {
    height: 10,    
}

function plus1() {
    return this.height +1;
};
    




// // Задача 4.


const numerator = {
    value: 1,
    double: function () {
        return this.value *= 2;
    },
    plusOne: function() {    
        return this.value +1;
    },
    minusOne: function() {
        return this.value -1;;
    }
};