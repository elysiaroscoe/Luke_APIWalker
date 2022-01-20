import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Starships = () => {

    const [starship, setStarship] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then(res =>{
            console.log(res.data)
            setStarship(res.data)
        })
        .catch(err =>{
            setStarship("")
        })
    }, [id])

    return (
        <div>
            {
                starship?
                <div>
                    <h1>Starship: {starship.name}</h1>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Consumables: {starship.consumables}</p>
                </div>:
                <h1>These aren't the droids you're looking for...</h1>
            }
        </div>
    );
};

export default Starships;
