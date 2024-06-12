function Button({name, removeCard}){
    console.log("Remove card Button below: ")
    console.log(typeof removeCard); // Check the type of removeCard prop
    return(
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-2/4 m-[auto] my-3" onClick={() =>  removeCard(name)}>Play Action</button>
    );
}
export default Button;