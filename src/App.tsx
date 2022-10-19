
import './App.css';
import Home from './components/Home';
import { useState, createContext, useContext, useRef, useReducer, useCallback, FC, useLayoutEffect, useTransition } from "react";

import { BrowserRouter as Router, Route, Link, Routes, Navigate, useRoutes } from "react-router-dom";
import MainLayout from './pages/main/MainLayout';
import ProjectLayout from './pages/project/ProjectLayout';
import ProjectDetailView from './pages/project/ProjectDetailView';
import ProjectListView from './pages/project/ProjectListView';
import Error from './pages/main/404';
import ProjectAdd from './pages/project/ProjectAdd';
let Cars = [
  { "id": 1, "color":"red", "brand":"Mercedes", "year":2049 },
  { "id": 2, "color":"blue", "brand":"Audi", "year":2018 },
  { "id": 3, "color":"green", "brand":"Volvo", "year":2019 },
  { "id": 4, "color":"yellow", "brand":"BMW", "year":2017 },
  { "id": 5, "color":"black", "brand":"Ford", "year":2016 },
  { "id": 6, "color":"white", "brand":"Fiat", "year":2015, img: 'https://preview.redd.it/ui3zesfmnfu91.jpg?width=108&crop=smart&auto=webp&s=5d65219ea7be97c0a532a4ce453710f3d9abd06c' }
];
interface Car {
  color: string;
  brand: string;
  year: number;
  img?: string;
  id?: number;
}
const reducer = (state: Car[], action: any) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((car, i) => i !== action.payload.payload);
    default:
      return state;
  }
}


const App: FC = (): JSX.Element => {
  const [cars, dispatch] = useReducer(reducer, Cars);

  const removeCar = ((car: Car) => {
    dispatch({ type: "delete", payload: car });
  });
  const addCar = useCallback((car: Car) => {
    car.id = Math.max(...cars.map((car) => car.id)) + 1;
    dispatch({ type: "add", payload: car });
  }, [cars]);

  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Home /> },
      { path: '/404', element: <Error /> },
    ],
  }

  const projectRoutes = {
    path: 'project',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <ProjectDetailView cars={cars} /> },
      { path: 'add', element: <ProjectAdd addCar={addCar} /> },
      { path: '', element: <ProjectListView cars={cars} /> },
    ],
  }

  const routing = useRoutes([mainRoutes, projectRoutes]);
  return <>{routing}</>
}

export default App;
