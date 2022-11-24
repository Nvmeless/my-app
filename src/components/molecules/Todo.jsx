import { useState } from "react";


export const Todo = () => {

    const [task, setTask] = useState([
        {id:1, title: "Rajouter le Todo Component", isDone: false},
    ]);
    const [taskInput, setTaskInput] = useState("Nouvelle tache")

    const addTask =  (text) => {
        const newTask = {
            title:text, 
            id: Date.now(),
            done:false,
        }


        setTask([...task, newTask]);
    }
    const deleteTask =  (id) => {
        const filteredTasks = task.filter((t) => t.id !== id)


        setTask(filteredTasks);
    }


    const findById = (id) => {
        const res = { 
            realTask:task.find((t) => t.id === id),
            index: task.findIndex((t) => t.id === id)
        }

        return res
    }

    const getCopiesFromId = (id) => {
        const {realTask, index} = findById(id);

        const taskCopy = { ...realTask};
        const taskListCopy = [...task];

        return {
            taskCopy: taskCopy,
            taskListCopy: taskListCopy,
            index: index
        }
    }

    const executeFromId = (id, callback, payload = {}) => {
                const {taskCopy, taskListCopy, index } = getCopiesFromId(id);
                const copy = callback(taskCopy, payload);

        taskListCopy[index] = copy;
        return taskListCopy;
    }

    const toggleTask = (id) => {
        // // // const realTask = task.find((t) => t.id === id);
        // // // const index = task.findIndex((t) => t.id === id);
        // // const {realTask, index} = findById(id);
        // // const taskCopy = { ...realTask};
        // // const taskListCopy = [...task];
        // const {taskCopy, taskListCopy, index } = getCopiesFromId(id);
        // taskListCopy[index] = taskCopy;
        const taskCopy = executeFromId(id, (copy) => {
            copy.isDone = !copy.isDone
            return copy
        })
        setTask(taskCopy);
    }


    const renderTask = () => {
        return task.map((t) => {
            return <div><span onClick={()=> toggleTask(t.id)}>{t.isDone ? 'Fait': "pas fait"}</span> - {t.title} <span onClick={() => {deleteTask(t.id)}}>X</span></div>
        })
    }

    const changeInput = (e, val) => {
        if(taskInput !== val){
            setTaskInput(val)
        }
    }

    return (

        <div>
            {
                renderTask()
            }

            <input onChange={(e, val) => {changeInput(e, e.target.value)}} placeholder={taskInput}/> 
            <button onClick={() => addTask(taskInput)}>Nouvelle Tache</button>
        </div>
    )
}

