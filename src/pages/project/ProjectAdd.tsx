import React, { FC, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
interface Car {
    id: number;
    color: string;
    brand: string;
    year: number;
    img?: string;
}
const ProjectAdd = (props: any): JSX.Element => {
    let p: Car = {
        brand: "",
        year: 2000,
        color: "",
        img: "",
        id: 0
    }
    const [car, setInputs] = useState(p);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCar(car);
        

        navigate('/project');
    }
    return (
        <div className='container'>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="carBrandFormControlInput" className="form-label">Brand</label>
                    <input type="text" className="form-control" list="datalistOptions" id="carBrandFormControlInput" name="brand" placeholder="Type to search..." value={car.brand} onChange={handleChange}  />
                    <datalist id="datalistOptions">
                        <option value="BMW" />
                        <option value="Audi" />
                        <option value="Volkswagen" />
                        <option value="Mercedes" />
                        <option value="Ferrari" />
                        <option value="Skoda" />
                        <option value="Toyota" />
                        <option value="Ford" />
                        <option value="Opel" />
                        <option value="Peugeot" />
                        <option value="Renault" />
                        <option value="Tesla" />
                        <option value="Honda" />
                        <option value="Mitsubishi" />
                        <option value="Land Rover" />
                    </datalist>
                </div>
                <div className="col-md-4">
                    <label htmlFor="carYearFormControlInput" className="form-label">Year</label>
                    <input type="number" className="form-control" id="carYearFormControlInput" name="year" value={car.year} onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="exampleColorInput" className="form-label">Color</label>
                    <input type="color" className="form-control form-control-color" id="exampleColorInput" name="color" value={car.color} title="Choose your color" onChange={handleChange}  />
                </div>
                <div className="col-12">
                    <label htmlFor="carImgFormControlInput" className="form-label">Image</label>
                    <input type="text" className="form-control" id="carImgFormControlInput" name="img" placeholder="https://..." value={car.img} onChange={handleChange} />
                </div>
                <div className='col-md-2'>
                    <button type="submit" className="btn btn-success">Add</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectAdd;