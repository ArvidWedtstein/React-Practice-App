

import React from 'react';


interface Car {
    id: number;
    color: string;
    brand: string;
    year: number;
    img?: string;
}
interface IProps {
    car: Car
}
function ProjectCard(car: IProps) {
    return (
        <div className="col-4 box">
            {car.car.img && <img className="img-fluid rounded float-end" src={car.car.img} alt={car.car.brand} />}
            <p className="icon">{car.car.id}</p>
            <h2>{car.car.brand}</h2>
            <p className="subtitle">{car.car.year}</p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe amet asperiores cumque fuga odit dicta velit nam magni ipsum?
        </div>
    )
}

export default ProjectCard;
  