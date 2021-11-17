import React, { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        //Cuerpo de mi peticion
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category] )

    return state;
}



