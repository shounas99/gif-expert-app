import React from "react";
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });
        
    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();  
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: {value} });   
        
        expect (wrapper.find('p').text().trim()).toBe(value);
    })  

    test('No debe de postear la informacion con Submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();

        
    })

    test('Llamo el setCategories y limpia la caja de texto', () => {
        const value = 'Hola';
        
        //Simula el inputChange
        wrapper.find('input').simulate('change', {target: {value} } );
        //Simula el submit
        wrapper.find('form').simulate('submit', {preventDefault(){} } );
        //setCategories debe haber sido llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
})
