import React, { FC, useState } from 'react';
import { Link, Outlet, useLocation, NavLink } from 'react-router-dom';
import NavItem from '../../components/NavItem'
import Login from '../../components/Login/Login';
import useToken from '../../hooks/useToken';


const MainLayout: FC = (): JSX.Element => {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark g">
                <div className="container-fluid">
                    <a className="chrome shine text-decoration-none" data-text="React Test" href="#">React Test</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavItem to="/" className="nav-link" aria-current="page">Home</NavItem>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Project
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavItem to="/project/add" className="dropdown-item">Add Project</NavItem></li>
                                <li><Link className="dropdown-item" to="/project">List Projects</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Link</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default MainLayout;