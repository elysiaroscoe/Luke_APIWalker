import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Planets = () => {

    const [planet, setPlanet] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res =>{
            console.log(res.data)
            setPlanet(res.data)
        })
        .catch(err=>{
            setPlanet("")
        })
    }, [id])

    return (
        <div>
            {
                planet?
                <div>
                    <h1>Planet: {planet.name}</h1>
                    <p>Climate: {planet.climate}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Orbital Period: {planet.orbital_period}</p>
                    <p>Population: {planet.population}</p>
                </div>:
                <h1>These aren't the droids you're looking for...</h1>
            }
        </div>
    );
};

export default Planets;
