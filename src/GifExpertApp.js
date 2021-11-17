import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({defaultCategories = []}) => {

    // const categories = ['Jonas Brothers', 'Joe Jonas', 'Kevin Jonas', 'Nick Jonas', '5SOS','Shawn Mendes'];

    // const [categories, setCategories] = useState(['Jonas Brothers']);
    const [categories, setCategories] = useState([defaultCategories]);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, 'The Little Prince']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr /> 
            <ol>
                { 
                    categories.map(category => (
                        <GifGrid 
                        key = {category}
                        category ={category} />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
