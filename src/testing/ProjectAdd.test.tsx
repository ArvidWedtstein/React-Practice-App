import React from 'react';

import { fireEvent, getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import Login, { loginUser } from '../components/Login/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import TestUtils, { act } from 'react-dom/test-utils';
import MainLayout from '../pages/main/MainLayout';
import ProjectAdd from '../pages/project/ProjectAdd';
import { lang } from '../App';
import useLocalize, { translations } from '../hooks/useLocale';

describe('Add Car to List Of Cars', () => {
    jest.enableAutomock();
    const { getByLabelText, getByTestId, rerender } = render(<Router><ProjectAdd /></Router>);
    // get all inputs
    const brand = getByTestId('form-brand-lbl');
    const year = getByTestId('form-year-lbl');
    const color = getByTestId('form-color-lbl');
    const gearbox = getByTestId('form-gearbox-lbl');
    const img = getByTestId('form-image-lbl');
    const brandInp = getByTestId('form-brand-inp');
    const yearInp = getByTestId('form-year-inp');
    const colorInp = getByTestId('form-color-inp');
    const gearboxInp = getByTestId('form-gearbox-inp');
    const imgInp = getByTestId('form-image-inp');
    const submit = getByTestId('form-submit-btn');
    let inputs = [brandInp, yearInp, colorInp, gearboxInp, imgInp];
    let labels = [brand, year, color, gearbox, img];

    test('If all inputs and labels are present', () => {
        [...inputs, ...labels, submit].forEach((el) => {
            expect(el).toBeInTheDocument();
            expect(el).toBeVisible();
            expect(el).toBeEnabled();
            expect(el).not.toBeNull();
            
        });
    });

    test('Label Translation of form', async () => {
        labels.forEach((el) => {
            let id = el.getAttribute('data-testid')!.replaceAll('form-', '').replaceAll('-lbl', '')
            expect(el).toHaveTextContent(translations[id][lang]);
        });


        // expect(t).toHaveBeenCalledTimes(5);
        // expect(t).toHaveBeenCalledWith('Brand');
        // expect(t).toHaveBeenCalledWith('Add');
        // expect(t).toHaveBeenCalledWith('Year');
        // expect(t).toHaveBeenCalledWith('Color');
        // expect(t).toHaveBeenCalledWith('Gearbox');
        // expect(t).toHaveBeenCalledWith('Image');
    });

    test('input fields', async () => {
        fireEvent.change(brandInp, { target: { value: 'Mercedes' } });
        fireEvent.change(yearInp, { target: { value: 2049 } });
        fireEvent.change(colorInp, { target: { value: '#ff0000' } });
        fireEvent.change(gearboxInp, { target: { value: 'Automatic' } });
        fireEvent.change(imgInp, { target: { value: 'https://preview.redd.it/ui3zesfmnfu91.jpg?width=108&crop=smart&auto=webp&s=5d65219ea7be97c0a532a4ce453710f3d9abd06c' } });

        
        expect((brandInp as HTMLInputElement).value).toBe('Mercedes');
        expect((yearInp as HTMLInputElement).value).toBe('2049');
        expect((colorInp as HTMLInputElement).value).toBe('#ff0000');
        expect((gearboxInp as HTMLInputElement).value).toBe('Automatic');
        expect((imgInp as HTMLInputElement).value).toBe('https://preview.redd.it/ui3zesfmnfu91.jpg?width=108&crop=smart&auto=webp&s=5d65219ea7be97c0a532a4ce453710f3d9abd06c');
        fireEvent.click(submit);
    })
});





