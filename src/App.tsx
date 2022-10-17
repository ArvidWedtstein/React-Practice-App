
import './App.css';
import Garage from './components/Garage';
import CarForm from './components/CarForm';
import Home from './components/Home';
import { useState, createContext, useContext, useRef, useReducer, useCallback } from "react";
import { Props } from './components/Car';

const Cars = [
  { "color":"red", "brand":"Mercedes", "year":2049 },
  { "color":"blue", "brand":"Audi", "year":2018 },
  { "color":"green", "brand":"Volvo", "year":2019 },
  { "color":"yellow", "brand":"BMW", "year":2017 },
  { "color":"black", "brand":"Ford", "year":2016 },
  { "color":"white", "brand":"Fiat", "year":2015 }
];

const reducer = (state: Props[], action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      console.log(action.payload);
      return state.filter((car, i) => i !== action.payload);
    default:
      return state;
  }
}


function App() {
  const [cars, dispatch] = useReducer(reducer, Cars);
  // const [cars, setCars] = useState([
  //   { "color":"red", "brand":"Mercedes", "year":2049 },
  //   { "color":"blue", "brand":"Audi", "year":2018 },
  //   { "color":"green", "brand":"Volvo", "year":2019 },
  //   { "color":"yellow", "brand":"BMW", "year":2017 },
  //   { "color":"black", "brand":"Ford", "year":2016 },
  //   { "color":"white", "brand":"Fiat", "year":2015 }
  // ]);

  const removeCar = ((car: Props) => {
    dispatch({ type: "delete", payload: car });
  });
  const addCar = useCallback((car: Props) => {
    dispatch({ type: "add", payload: car });
  }, []);

  // const addCar = (car: Props) => {
  //   dispatch([...cars, car]);
  // }


  return (
    <div className="App">
      <Garage setCars={removeCar} cars={cars} year={1965} color="red" />
      <CarForm cars={cars} addCar={addCar}/>
      <Home />
    </div>
  );
}

export default App;
