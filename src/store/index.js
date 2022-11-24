import {createSlice, configureStore} from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name:"todo",
    initialState:[
        {id:1, title: "Rajouter le Todo Component", isDone: false},
    ], 
    reducers: { 
        addTask: (state, action) => {
            //Action {type:"ADD_TASK", payload:"Ma Nouvelle task"}
            //Action {type:"todo/addTask", payload:"Ma Nouvelle task"}

            const newTask = {
                id:Date.now(),
                title:action.payload,
                isDone: false
            }
            
            state.push(newTask);
        },
        toggleTask: (state, action) => {
            //Action {type:"TOGGLE_TASK", payload:20}
            //Action {type:"todo/toggleTask", payload:"Ma Nouvelle task"}
            console.log("dispatching", state, action);
            const task = state.find(t => t.id === action.payload);
            task.isDone = !task.isDone
        },
        deleteTask: (state, action) => {
            //Action {type:"DELETE_TASK", payload:20}
            //Action {type:"todo/deleteTask", payload:"Ma Nouvelle task"}

            state = state.filter(t => t.id !== action.payload);
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})


// export const toggleTask = (id) => {
//     return {
//         type:'todo/toggleTask',
//         payload: id
//     }
// }

export const {toggleTask} = todoSlice.actions