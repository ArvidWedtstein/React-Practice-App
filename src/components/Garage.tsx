import React,{ SyntheticEvent } from 'react';
import Car, { CapString, Props } from './Car';

interface GarageProps {
    cars: Props[];
    year: number;
    color: string;
    setCars: any;
}
interface IState {
    year: number;
    color: string;
}
class Garage extends React.Component<GarageProps, IState> {
    constructor(props: GarageProps) {
        super(props);
        this.state = {
            color: props.color,
            year: props.year
        }
    }
    changeColor = () => {
        this.setState({ color: "blue" });
    }
    test = (a: string, b: SyntheticEvent) => { // events
        alert(a)
    }
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-bg-secondary">{CapString(this.state.color)} Garage (built in {this.state.year}) Inventory:</h1>
                <p className="text-sm">{this.props.cars.length} Cars</p>
                <div className="d-flex flex-wrap">
                    {this.props.cars.map((car: any, index: number) => {
                        return <Car deleteCar={this.props.setCars} index={index} key={index} color={car.color} brand={car.brand} year={car.year} />
                    })}
                </div>
                <button className="btn btn-info m-3" type="button" onClick={this.changeColor}>Change Color</button>
                
            </div>
        )
    }
}
export default Garage;