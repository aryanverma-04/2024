import Card from "./Card";
function CardPanel({cardData, removeCard}){
    console.log("Remove card CardPanel below: ")
    console.log(typeof removeCard); // Check the type of removeCard prop
    return(
        <div className="grid grid-cols-3 gap-5 w-3/4 m-[auto] mt-10">
            {
                cardData.map((x) =>{ 
                    return <Card {...x} removeCard={removeCard}></Card>
                })
            }
        </div>
    );
}
export default CardPanel;