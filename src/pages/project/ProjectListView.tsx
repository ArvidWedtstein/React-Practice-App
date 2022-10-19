import React, { FC, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

interface Car {
    id: number;
    color: string;
    brand: string;
    year: number;
    img?: string;
}
interface IProps {
    cars: Car[]
}
const ProjectListView = (props: IProps): JSX.Element => {
    return (
        <div className='container-fluid'>
            <div className="p-3">
                <h1 className="text-center fs-1 text-uppercase fw-bold header mt-3" style={{letterSpacing: '10px', fontFamily: 'Lora, serif'}}>Projects</h1>
                <div className="row">
                    <>
                        {props.cars.map((car, i) => <ProjectCard key={i} car={car} />)}
                    </>
                </div>
            </div>
        </div>
    )
};

export default ProjectListView;
