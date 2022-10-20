import React, { FC, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import { Car, Cars } from '../../App';

interface IProps {
    cars: Car[],
}
const ProjectListView = (props: IProps): JSX.Element => {
    // const filteredData = Cars.filter((car) => {
    //     if (props.input === '') return car;

    //     return car.brand.toLowerCase().includes(props.input || '');
    // });
    return (
        <div className='container-fluid'>
            <div className="p-3">
                <h1 className="text-center fs-1 text-uppercase fw-bold header mt-3" style={{letterSpacing: '10px', fontFamily: 'Lora, serif'}}>Projects</h1>
                <div className="row">
                    <>
                        {Cars.map((car, i) => <ProjectCard key={i} car={car} />)}
                    </>
                </div>
            </div>
        </div>
    )
};

export default ProjectListView;
