class vehicle {
  constructor(type, no, model, company) {
    this.type = type;
    this.no = no;
    this.model = model;
    this.company = company;
  }
  getDetails = () => {
    alert(`Vehicle Details:
        Type: ${this.type}
        Number: ${this.no}
        Model: ${this.model}
        Company: ${this.company}`);
  };
  updateNo = (no)=>{
    this.no = no
  }
}

let car = new vehicle('Car', 'MH-01-2345', 'Sedan', 'Toyota');
car.getDetails();
car.updateNo("HP38B1011")
car.getDetails();