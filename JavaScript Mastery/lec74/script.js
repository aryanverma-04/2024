class airTicket{
    booked(){
        alert("Hello, "+this.name+" Your Plane ticket is booked with ticket no. " +this.ticketNO+"")
    }
    submit(){
        alert("Your Airplane ticket is submitted")
        let n = prompt("Enter you name: ")
        let t = prompt("Enter ticket no: ")
        this.fillDetails(n, t)
        this.booked()
    }
    cancel(){
        alert("Your plane ticket is canceled")
    }
    fillDetails(name, ticketNO){
        this.name = name;
        this.ticketNO = ticketNO;
    }
}
let aryan = new airTicket()
aryan.submit()
aryan.cancel()