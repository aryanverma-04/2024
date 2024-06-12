import './App.css';
import CardPanel from './Components/CardPanel';
import CardData from './Data'
// import { useState } from 'react';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
  const[cardData, setCardData] = useState(CardData);
  console.log(cardData);
 
  function removeCard(name){
    const newCardData = cardData.filter(x => x.name !== name)
    setCardData(newCardData);  
  }

  if(cardData.length === 0){
    return(
      <div className='text-2xl text-center text-red-400 bold mt-80'>
        <h4 className='text-4xl'>No More Cards Left</h4>
        <button className = "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-2/10 m-[auto] my-3" onClick={() => setCardData(CardData)}>Play Again!</button>
      </div>
    );
  }
  console.log("Remove card App below: ")
  console.log(typeof removeCard); // Check the type of removeCard prop
  return (
      <div className=''>
        <Header/>
        <CardPanel cardData = {cardData} removeCard={removeCard}/>
      </div>
  )
}

export default App;
