import React from 'react';

export interface Props {
    color: string;
    brand: string;
    year: number;
}
interface IProps {
    color: string;
    brand: string;
    year: number;
    index: number;
    deleteCar: (index: number) => void;
}
export function CapString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Car(props: IProps) {
    return (
        <div className="col-sm-3">
            <div className="m-3 w-sm-100 rounded overflow-hidden shadow-lg">
                <img className="w-100 h-25" src="https://tailwindcss.com/img/card-top.jpg" alt="Test" style={{borderBlock: `3px solid ${props.color}`}} />
                <div className="px-6 py-4">
                    <div className="h4 font-weight-bold text-xl mb-2">{CapString(props.brand)}</div>
                    <p className="text-bg-secondary text-base">
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="d-inline-block badge bg-secondary rounded px-3 py-1 font-weight-semibold text-bg-secondary mr-2">{CapString(props.color)}</span>
                    <span className="d-inline-block badge bg-success rounded px-3 py-1 text-small font-weight-semibold text-bg-secondary ml-2">{props.year}</span>
                </div>
                <button type="button" className="btn btn-secondary my-2 px-4" onClick={() => props.deleteCar(props.index)}>{props.index}</button>
            </div>
        </div>
    )
}

export default Car;
  