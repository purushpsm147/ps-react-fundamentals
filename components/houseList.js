import { useState } from "react";
import HouseRow from "./houseRow";


const housesArray = [
    {
      id: 1,
      address: "12 Valley of Kings, Geneva",
      country: "Switzerland",
      price: 900000,
    },
    {
      id: 2,
      address: "89 Road of Forks, Bern",
      country: "Switzerland",
      price: 500000,
    },
  ];
  
  const HouseList = () => {
    //first rule of Hooks: Call hooks at top level
    //second rule of Hooks: Call hooks from React function components

    const [houses, setHouses] = useState(housesArray);
    const [counter, setCounter] = useState(0);
    setCounter(current => counter + 1);

    const addHouse = () => {
        setHouses([...houses, {
            id: 3,
            address: "12 Valley of Kings, Geneva",
            country: "Switzerland",
            price: 900000,
          }]);
    };

        //JSX can have only one parent element.Use React Fragment to wrap multiple elements
    //shorthand for React.Fragment is <></>
    return (
        <>
          <div className="row mb-2">
            <h5 className="themeFontColor text-center">
              Houses currently on the market
            </h5>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Asking Price</th>
              </tr>
            </thead>
            <tbody>
              {houses.map( h => <HouseRow key = {h.id} house= {h} />)}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={addHouse}>
            Add
          </button>
        </>
      );
   
    };
  

  
  export default HouseList;
  