import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProjectLayout: FC = (): JSX.Element => {
    return (
        <div className='container-fluid'>
            <button className="btn btn-secondary m-3">
                <Link className="text-light" to="/">Back</Link>
            </button>
            <div className="p-6">
                <h1 className="text-center fs-1 text-uppercase fw-bold header" style={{letterSpacing: '10px', fontFamily: 'Lora, serif'}}>Projects</h1>
                <div className="row">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ProjectLayout;