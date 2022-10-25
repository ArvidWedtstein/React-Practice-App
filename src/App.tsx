
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
export var Cars: Car[] = [
  { "id": 1, "color":"255, 0, 0", "brand":"Mercedes", "year":2049 },
  { "id": 2, "color":"0, 0, 255", "brand":"Audi", "year":2018 },
  { "id": 3, "color":"0, 255, 0", "brand":"Volvo", "year":2019 },
  { "id": 4, "color":"255, 255, 0", "brand":"BMW", "year":2017 },
  { "id": 5, "color":"0, 0, 0", "brand":"Ford", "year":2016 },
  { "id": 6, "color":"255, 12, 255", "brand":"Fiat", "year":2015, gearbox: 'Manual', img: 'https://preview.redd.it/ui3zesfmnfu91.jpg?width=108&crop=smart&auto=webp&s=5d65219ea7be97c0a532a4ce453710f3d9abd06c' }
];
export const lang = 'no-no'
export interface Car {
  id?: number;
  color: string;
  brand: string;
  year: number;
  img?: string;
  gearbox?: "Automatic" | "Manual";
}
const reducer = (state: Car[], action: any) => {
  switch (action.type) {
    case "add":
      console.log(action.payload);
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
