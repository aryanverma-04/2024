import "./App.css";
import Products from './components/Products'
import ProductForm from "./components/ProductForm";
function App() {
  const data = [
    {
      name: "Toyota Corolla",
      price: 25000,
      desc: "The Toyota Corolla is a compact sedan known for its reliability and fuel efficiency.",
      date: "2024-01-15",
    },
    {
      name: "Honda Civic",
      price: 27000,
      desc: "The Honda Civic is a popular compact car with a spacious interior and agile handling.",
      date: "2024-02-20",
    },
    {
      name: "Ford Mustang",
      price: 35000,
      desc: "The Ford Mustang is an iconic American muscle car known for its powerful performance and sleek design.",
      date: "2024-03-10",
    },
    {
      name: "Tesla Model 3",
      price: 50000,
      desc: "The Tesla Model 3 is an electric sedan with cutting-edge technology and impressive range.",
      date: "2024-04-05",
    },
    {
      name: "BMW X5",
      price: 60000,
      desc: "The BMW X5 is a luxury SUV known for its comfortable ride, upscale interior, and advanced features.",
      date: "2024-05-01",
    },
  ];
  function printDataFinal(data){
    console.log("Inside the printDataFunction(APP.JS)");
    console.log(data)
  }
  return(
    <div className="App">
      <ProductForm callBackFunction = {printDataFinal}/>
      <Products data={data} />
    </div>
  );
}
export default App;
