import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { Props } from './Car';
import Garage from './Garage';


function CarForm(props: any) {
    let p: Props = {
        brand: "",
        year: 2000,
        color: "",
    }
    const [car, setInputs] = useState(p);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addCar(car);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Brand:
                <input type="text" name="brand" value={car.brand} onChange={handleChange} />
            </label>
            <label>
                Year:
                <input type="text" name="year" value={car.year} onChange={handleChange} />
            </label>
            <label>
                Color:
                <input type="text" name="color" value={car.color} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default CarForm;