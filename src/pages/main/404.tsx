import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Error: FC = (): JSX.Element => {
    return (
        <>
            <div className='container-fluid p-5 h-100' style={{background: 'repeating-linear-gradient(45deg, #000, #999, #000 5%) 0/ 50% no-repeat, repeating-linear-gradient(-45deg, #000, #999, #000 5%) 100%/ 50% no-repeat, linear-gradient(#777, #000)'}}>
                <h1 className='m-5'>404 - Page not found</h1>
            </div>
        </>
    );
}

export default Error;