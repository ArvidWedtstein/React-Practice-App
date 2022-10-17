import React from 'react';
import Car from './Car';

interface State {
    cars: any;
    color: string;
    buildyear: number;
}
class Garage extends React.Component {
    state = {
        color: "red",
        buildyear: 1964,
        cars: [
            (<Car color="red" brand="Mercedes" />),
            (<Car color="green" brand="Opel" />),
            (<Car color="yellow" brand="Volkswagen" />),
            (<Car color="black" brand="Toyoda" />)
        ]
    };
    changeColor = () => {
        this.setState({ color: "blue" });
    }
    test = (a: string, b: any) => { // events
        alert(a)
    }
    render() {
        return (
            <div>
                <h1>{this.state.color} Garage (built in {this.state.buildyear}) Inventory:</h1>
                <p>{this.state.cars.length} Cars</p>
                <ul>
                    {this.state.cars.map((car: any, index: number) => {
                        return <li key={index}>{car}</li>
                    })}
                </ul>
                <button type="button" onClick={this.changeColor}>Change Color</button>
                <button type="button" onClick={(event) => this.test("TEsting", event)}>Test</button>
            </div>
        )
    }
}
export default Garage;