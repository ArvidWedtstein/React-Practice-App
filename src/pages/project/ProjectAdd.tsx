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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCar(car);
        // if (car)
        // Cars.push(car)
        
        navigate('/project');
    }
    const navigate = useNavigate();
    const [car, setInputs] = useState(p);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.target;
        if (name === 'color') {
            value = hexTorgb(value);
        }
        setInputs(values => ({ ...values, [name]: value }));
    }
    
    
    function hexTorgb(hex: string) {
        let s1: any = '0x' + hex[1] + hex[2]
        let s2: any = '0x' + hex[3] + hex[4]
        let s3: any = '0x' + hex[5] + hex[6]
        return [s1 | 0, s2 | 0, s3 | 0].join(', ');
    }
    

    return (
        <div className='container'>
            <form className="row g-3" data-testid="form" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="carBrandFormControlInput" className="form-label" data-testid="form-brand-lbl">{localize('Brand')}</label>
                    <input type="text" className="form-control" list="datalistOptions" id="carBrandFormControlInput" name="brand" placeholder="Type to search..." data-testid="form-brand-inp" onChange={handleChange}  />
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
                    <label htmlFor="carYearFormControlInput" className="form-label" data-testid="form-year-lbl">{localize('Year')}</label>
                    <input type="number" className="form-control" id="carYearFormControlInput" name="year" data-testid="form-year-inp" onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="exampleColorInput" className="form-label" data-testid="form-color-lbl">{localize('Color')}</label>
                    <input type="color" className="form-control form-control-color" id="exampleColorInput" name="color" data-testid="form-color-inp" title="Choose your color" onChange={handleChange}  />
                </div>
                <div className="col-10">
                    <label htmlFor="carImgFormControlInput" className="form-label" data-testid="form-image-lbl">{localize('Image')}</label>
                    <input type="text" className="form-control" id="carImgFormControlInput" name="img" data-testid="form-image-inp" placeholder="https://..." onChange={handleChange} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="carGearboxFormControlInput" className="form-label" data-testid="form-gearbox-lbl">{localize('Gearbox')}</label>
                    <input type="text" className="form-control" id="carGearboxFormControlInput" data-testid="form-gearbox-inp" name="gearbox" onChange={handleChange} />
                </div>
                <div className='col-md-2'>
                    <button type="submit" data-testid="form-submit-btn" className="btn btn-success">{localize('Add')}</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectAdd;