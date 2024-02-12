import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddBar from "./AddBar";

function AppContent()
{
    const [ tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(tasks.length===0) return;
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks]);

    useEffect(()=>{
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if(tasks==null) return;
        setTasks(tasks)
    },[]);

    function addTask(name)
    {
        setTasks(prev => {
          return [...prev,{name:name,done:false}];  
        })
    }
    function removeTask(taskIndex)
    {
        setTasks(prev=>{
             return prev.filter((t,index)=>{

                return index !==taskIndex;

             })
            });

    }
    function updateTaskDone(taskIndex, newDone)
    {
        console.log("YT")
        setTasks(prev => {
            const newTasks =[...prev];
            
            newTasks[taskIndex].done = newDone;
            return newTasks;
        })
    }
    return(
        <div>
            <AddBar onAdd={addTask}/>
            {
                tasks.map((task,index)=>(
                    <TodoItem {...task} 
                        onToggle={ done => updateTaskDone(index,done)}
                        onDelete={()=>removeTask(index)}
                    />
                ))
            }
        </div>
    );
}

export default AppContent;