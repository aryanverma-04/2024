import './App.css';
import ItemName from './components/ItemName';
import ItemDetails from './components/ItemDetails';
import Card from './components/Card'
function App() {
  const fetchedData = [
    {
      "name": "Toyota Corolla",
      "price": 25000,
      "desc": "The Toyota Corolla is a compact sedan known for its reliability and fuel efficiency.",
      "date": "2024-01-15"
    },
    {
      "name": "Honda Civic",
      "price": 27000,
      "desc": "The Honda Civic is a popular compact car with a spacious interior and agile handling.",
      "date": "2024-02-20"
    },
    {
      "name": "Ford Mustang",
      "price": 35000,
      "desc": "The Ford Mustang is an iconic American muscle car known for its powerful performance and sleek design.",
      "date": "2024-03-10"
    },
    {
      "name": "Tesla Model 3",
      "price": 50000,
      "desc": "The Tesla Model 3 is an electric sedan with cutting-edge technology and impressive range.",
      "date": "2024-04-05"
    },
    {
      "name": "BMW X5",
      "price": 60000,
      "desc": "The BMW X5 is a luxury SUV known for its comfortable ride, upscale interior, and advanced features.",
      "date": "2024-05-01"
    }
  ]
  
  return (
    <div className="App">
      <Card>
        <ItemName name={fetchedData[0].name}></ItemName>
        <ItemDetails price={fetchedData[0].price} desc = {fetchedData[0].desc} date={fetchedData[0].date}></ItemDetails>
        <ItemName name={fetchedData[1].name}></ItemName>
        <ItemDetails price={fetchedData[1].price} desc = {fetchedData[1].desc} date={fetchedData[1].date}></ItemDetails>
        <ItemName name={fetchedData[2].name}></ItemName>
        <ItemDetails price={fetchedData[2].price} desc = {fetchedData[2].desc} date={fetchedData[2].date}></ItemDetails>
        <ItemName name={fetchedData[3].name}></ItemName>
        <ItemDetails price={fetchedData[3].price} desc = {fetchedData[3].desc} date={fetchedData[3].date}></ItemDetails>
        <ItemName name={fetchedData[4].name}></ItemName>
        <ItemDetails price={fetchedData[4].price} desc = {fetchedData[4].desc} date={fetchedData[4].date}></ItemDetails>
      </Card>
    </div>
  );
}

export default App;
