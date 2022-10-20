import React, { FC, useEffect, useMemo } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';
import { Car, Cars } from '../../App';

interface IProps {
    cars: Car[],
}
const ProjectListView = (props: IProps): JSX.Element => {
    const useQuery = (() => {
        const { search } = useLocation();
        return useMemo(() => new URLSearchParams(search), [search]);
    });
    const query = useQuery();
    let filteredData = Cars.filter((car) => {
        if (!query.get('s')) return car;

        let array = query.get('s')?.split(',')?.map((s) => s.trim())
        if (!array) {
            return car.brand.toLowerCase().includes(query.get('s') || '');
        }

        array = array.map((s) => s.toLowerCase());
        

    });
    useEffect(() => {
        filteredData = Cars.filter((car) => {
            if (!query.get('s')) return car;
    
            let array = query.get('s')?.split(',')?.map((s) => s.trim())
            if (!array) {
                return car.brand.toLowerCase().includes(query.get('s') || '');
            }
    
            array = array.map((s) => s.toLowerCase());
            
    
        });
    }, [query]);
    
    return (
        <div className='container-fluid'>
            <div className="p-3">
                <h1 className="text-center fs-1 text-uppercase fw-bold header mt-3" style={{letterSpacing: '10px', fontFamily: 'Lora, serif'}}>Projects</h1>
                <div className="row">
                    <>
                        {filteredData.map((car, i) => <ProjectCard key={i} car={car} />)}
                    </>
                </div>
            </div>
        </div>
    )
};

export default ProjectListView;
