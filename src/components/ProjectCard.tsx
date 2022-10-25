

import React from 'react';

import { Car } from '../App';

interface IProps {
    car: Car
}
function ProjectCard(car: IProps) {
    return (
        <div className="col-4 box">
            {car.car.img && <div className="img-fluid rounded float-end" style={{background: `linear-gradient(20deg, rgba(${car.car.color},0.5) 99%, rgba(0,255,0,0.1)), url(${car.car.img})`, backgroundRepeat: 'no-repeat', width: '100px', height: '100px'}}></div>}
            <p className="icon">{car.car.id}</p>
            <h2>{car.car.brand}</h2>
            <p className="subtitle">{car.car.year}</p>
            Lorem ipsum dolor sit amet {car.car.gearbox}, adipisicing elit. Natus saepe amet asperiores cumque fuga odit dicta velit nam magni ipsum?
        </div>
    )
}

export default ProjectCard;
  