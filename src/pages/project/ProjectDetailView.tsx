import React, { FC } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

interface Car {
    id: number;
    color: string;
    brand: string;
    year: number;
}
interface IProps {
    cars: Car[]
}
const ProjectDetailView = (props: IProps): JSX.Element => {
    const params = useParams();
    const car = props.cars.find((car, i) => car.id === Number(params.id));
    if (!car) return <><h1>No car found</h1></>
    return <><ProjectCard car={car} /></>;
};

export default ProjectDetailView;
