import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Link, Outlet, useLocation, NavLink, useParams, useNavigate } from 'react-router-dom';



const NavItem = ({ ...props }: any) => {
    let { to, className, children } = props;
    const { pathname } = useLocation();
    if (pathname == to) {
        className = className + " active";
    }
    return (
        <Link to={to} className={className}>{children}</Link>
    );
};

export default NavItem;