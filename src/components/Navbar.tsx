import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Link, Outlet, useLocation, NavLink, useParams, useNavigate } from 'react-router-dom';
import NavItem from './NavItem'
import { Cars } from "../App";

const Navbar = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e: any) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const car = Cars.find((f) => f.brand.toLowerCase().includes(inputText));
        if (car) navigate(`/project/${car.id}`);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark g">
            <div className="container-fluid">
                <a className="chrome shine text-decoration-none" data-text="React Test" href="#" data-testid="navbar">React Test</a>
                <button className="navbar-toggler" type="button" data-testid="navbar" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <NavItem to="/" className="nav-link" aria-current="page" data-testid="navbar">Home</NavItem>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Project
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavItem className="dropdown-item" to="/project/add">Add Project</NavItem></li>
                            <li><NavItem className="dropdown-item" to="/project">List Projects</NavItem></li>
                            <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Link</a>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" data-testid="navbar" onChange={inputHandler}/>
                    <button className="btn btn-outline-success" type="submit" data-testid="navbar">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;