import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from "../../store";
import styled from 'styled-components'
const Task = styled.div`
    background-color: ${props => props.theme.primary};
`

export const Todo = () => {

    // const tasks = useSelector((state) => { console.log(state)}) 
    const task = useSelector((state) => { return state.todo}) 
    const [taskInput, setTaskInput] = useState("Nouvelle tache")

    const dispatch = useDispatch();

    const addTask =  (text) => {

    }
    const deleteTask =  (id) => {

    }


    const findById = (id) => {
        const res = { 
            realTask:task.find((t) => t.id === id),
            index: task.findIndex((t) => t.id === id)
        }

        return res
    }

    // const toggleTask = (id) => {
    //     console.log("dis", id)
    //     // return dispatch({type:'todo/toggleTask', payload: id})
    //     return 
    // }

    // const getCopiesFromId = (id) => {
    //     const {realTask, index} = findById(id);

    //     const taskCopy = { ...realTask};
    //     const taskListCopy = [...task];

    //     return {
    //         taskCopy: taskCopy,
    //         taskListCopy: taskListCopy,
    //         index: index
    //     }
    // }

    // const executeFromId = (id, callback, payload = {}) => {
    //             const {taskCopy, taskListCopy, index } = getCopiesFromId(id);
    //             const copy = callback(taskCopy, payload);

    //     taskListCopy[index] = copy;
    //     return taskListCopy;
    // }

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);


    const renderTask = () => {
        return task.map((t) => {
            return <Task><span onClick={()=> {dispatch(toggleTask(t.id))}}>{t.isDone ? 'Fait': "pas fait"}</span> - {t.title} <span onClick={() => {deleteTask(t.id)}}>X</span></Task>
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

