import { useState } from "react";
import Button from "./Button.js";

function Card({ name, desc, points, specialAbility, image, removeCard }) {
    const [readMore, setReadMore] = useState(false);
    const description_sliced = readMore? desc : `${desc.substring(0, 200)}...`;
    
    function readMoreHandler() {
        setReadMore(!readMore);
    }
    console.log("Remove card Card below: ")
    console.log(typeof removeCard); // Check the type of removeCard prop
    return (
        <div className="border flex flex-col pt-3 px-3 gap-2 mb-10">
            <img src={image} className="h-64 w-auto rounded" alt="Not able to load" />
            <div className="card-info text-white text-xl">
                <div><b>Name: </b>{name}</div>
                <div><b>Points: </b>{points}</div>
                <div><b>Special Power: </b>{specialAbility}</div>
            </div>
            <div className="desc text-white text-sm">
                {description_sliced}
                <span className="w-3/4 read-more text-blue-600" onClick={readMoreHandler}>
                    {readMore ? `Show Less` : `Read More`}
                </span>
            </div>
            <Button name={name} removeCard={removeCard} />
        </div>
    );
}

export default Card;
