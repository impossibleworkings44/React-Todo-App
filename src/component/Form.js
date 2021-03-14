import React, { useState } from 'react'

function Form() {

    const [userInput, setUserInput] = useState('');

    const [tasks, newTask] = useState([
        {

            id: 1,
            list: "do assignment",
            done: false,

        },

        {
            id: 2,
            list: "watch cartoon",
            done: false,

        }

    ])




    const removefromTodo = (task) => {

        newTask(tasks.filter((i) => i !== task))

    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');

    }

    const addTask = (userInput) => {
        let copy = [...tasks];
        copy = [...copy, { id: tasks.length + 1, list: userInput, done: false }];
        newTask(copy);
    }

    return (
        <div >
            <header>
                {/* <button>Cart : {cart.length}</button> */}
            </header>


            <h1>Todo-App</h1>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter todo for today..." />
            <button onClick={handleSubmit}>Add todo</button>

            {tasks.map((task) =>
            (
                <div key={task.id}>


                    <h3 onClick={() => removefromTodo(task)}>{task.list}</h3>



                </div >
            ))
            }

        </div >
    )
}



export default Form