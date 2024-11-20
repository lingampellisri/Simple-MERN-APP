import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Form()
{

const [email,setEmail]=useState("");
const [name,setName]=useState("");
const[task,setTask]=useState("");

const handleSubmit= async(e)=>
{
    e.preventDefault();
 await axios.post("http://localhost:5050/Add",{email,name,task});
 setEmail("");
 setName("");
 setTask("");

}




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2> Enter The details and Task</h2>

                <input type="text"
                placeholder='Enter email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
                <br/>

                <input type="text"
                placeholder='Enter name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                />

                <br/>

                <input type="text"
                placeholder='Enter Task'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                required
                />

                <button type="submit"> Add Task</button>

            </form>
        </div>
    );
}

export default Form;