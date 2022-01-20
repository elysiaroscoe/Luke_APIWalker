import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


const People = () => {

    const [person, setPerson] = useState({});
    const {id} = useParams();

    useEffect(() => {
        //useEffect is a hook to execute when components are updated, runs every render
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res =>{
            console.log(res.data)
            setPerson(res.data)
        })
        .catch(err=>{
            setPerson("")
            //api call not successful
        })
    }, [id])
    //variables in the array are the ones that get checked for changes, in this case id is the relevant one

    return (
        <div>
            {
                person?
                <div>
                    <h1>Person: {person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Gender: {person.gender}</p>
                </div>:
                <h1>These aren't the droids you're looking for...</h1>
            }
        </div>
    );
};

export default People;
