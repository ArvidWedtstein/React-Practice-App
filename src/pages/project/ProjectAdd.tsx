import React, { FC, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import localize from '../../hooks/useLocale';
import { Car, Cars } from '../../App';
const ProjectAdd = (props: any): JSX.Element => {
    let p: Car = {
        id: 0 || undefined,
        year: 2000,
        brand: "",
        color: "",
        img: "",
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
        if (car)
        Cars.push(car)
        
        navigate('/project');
    }
    return (
        <div className='container'>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="carBrandFormControlInput" className="form-label">{localize('Brand')}</label>
                    <input type="text" className="form-control" list="datalistOptions" id="carBrandFormControlInput" name="brand" placeholder="Type to search..." onChange={handleChange}  />
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
                    <label htmlFor="carYearFormControlInput" className="form-label">{localize('Year')}</label>
                    <input type="number" className="form-control" id="carYearFormControlInput" name="year" onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="exampleColorInput" className="form-label">{localize('Color')}</label>
                    <input type="color" className="form-control form-control-color" id="exampleColorInput" name="color" title="Choose your color" onChange={handleChange}  />
                </div>
                <div className="col-10">
                    <label htmlFor="carImgFormControlInput" className="form-label">{localize('Image')}</label>
                    <input type="text" className="form-control" id="carImgFormControlInput" name="img" placeholder="https://..." onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="carGearboxFormControlInput" className="form-label">{localize('Gearbox')}</label>
                    <input type="text" className="form-control" id="carGearboxFormControlInput" name="gearbox" onChange={handleChange} />
                </div>
                <div className='col-md-2'>
                    <button type="submit" className="btn btn-success">{localize('Add')}</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectAdd;