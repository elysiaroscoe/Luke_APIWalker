import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Form = (props) => {

    const [category, setCategory] = useState("people");
    const [id, setId] = useState("");
    const history = useHistory();

    const handleCategory = (e) => {
        //update the category in state to category in form
        setCategory(e.target.value);
        // console.log(category);
    }

    const handleId = (e) => {
        //update the id in state to id from form
        setId(e.target.value);
        // console.log(id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //redirect
        history.push(`/${category}/${id}`)
        //submitting the form changes the route
    }

    return (
            <div>
                <form onSubmit = {handleSubmit}>
                    <label>Search Category:</label>
                    <select onChange = {handleCategory} value = {category}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>
                        {/* could also iterate through an array of the categories */}
                    </select>
                    <label>Id:</label>
                    <input type="number" onChange = {handleId} value = {id}></input>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
    );
};

export default Form;
