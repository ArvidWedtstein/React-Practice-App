
import './App.css';
import Garage from './components/Garage';
import CarForm from './components/CarForm';
import Home from './components/Home';
import { useState } from "react";
import { Props } from './components/Car';

function App() {
  const [cars, setCars] = useState([
    { "color":"red", "brand":"Mercedes", "year":2049 },
    { "color":"blue", "brand":"Audi", "year":2018 },
    { "color":"green", "brand":"Volvo", "year":2019 },
    { "color":"yellow", "brand":"BMW", "year":2017 },
    { "color":"black", "brand":"Ford", "year":2016 },
    { "color":"white", "brand":"Fiat", "year":2015 }
  ]);

  const addCar = (car: Props) => {
    setCars([...cars, car]);
  }
  const deleteCar = (index: number) => {
    setCars(cars.filter((car, i) => i !== index));
  }
  return (
    <div className="App">
      <Garage setCars={setCars} cars={cars} year={1965} color="red" />
      <CarForm cars={cars} addCar={addCar}/>
      <Home />
    </div>
  );
}

export default App;
