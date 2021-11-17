import React from 'react';
import GifExpertApp from "../GifExpertApp";
import { shallow } from "enzyme"

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe mostrarse corretamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('Mostar lista de categorias', () => {
        const categories = ['Jonas Brothers', 'Joe Jonas']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    })
    
    
})
