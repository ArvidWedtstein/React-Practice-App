import React, { FC, useState, Component } from 'react';
import { Link, Outlet, useLocation, NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import NavItem from '../../components/NavItem'
import Login from '../../components/Login/Login';
import useToken from '../../hooks/useToken';


const MainLayout: FC = () => {
    const { token, setToken } = useToken();

    // if (!token) {
    //     return <Login setToken={setToken} />
    // }
    return (
        <>
            <div data-testid="main-layout">
                <Navbar />
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;