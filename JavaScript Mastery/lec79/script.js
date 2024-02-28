class Gadgets {
    constructor(name, type, company, price) {
        this.name = name;
        this.type = type;
        this.company = company;
        this.price = price;
    }    

    getDetails() {
        console.log(`The Gadgets Details are as follows:  
            - The gadget name is ${this.name}, 
            - The type of gadget is ${this.type},
            - The company detail is ${this.company},
            - The price of the device is ${this.price}`
        );
    }
}

class mobile extends Gadgets{
    getDetails(){
        console.log("The class called is for mobile")
    }
}

let mobile11 = new Gadgets('iPhone 13', 'Smartphone', 'Apple', '$999');
mobile11.getDetails();

let mobile1 = new mobile('galaxy A51', 'Smartphone', 'Samsung', '$499');
mobile1.getDetails();

