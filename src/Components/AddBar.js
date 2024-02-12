import React, { useState } from "react";

function AddBar({onAdd})
{
    const [taskName,setTaskName] = useState('');

    function handleSubmit(ev)
    {
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
    return(
        <div className="AddBar">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={e => setTaskName(e.target.value)}
                placeholder="Enter Task Name"/>
                <button onClick={handleSubmit}>+</button>
            </form>
        </div>
    );
}

export default AddBar;