import {createSlice, configureStore, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

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
            return state;
        }
    }
})



export const fetchPlaylists = createAsyncThunk('playlist/fetchPlaylists', async () => {
    const token = "BQAzCVguK_3nEBpCxy3RvnrhlZ7z2rC-Io1WgKKvVIFk6ibKc0ypir_RkS36hLS0lHKBEKAE0zEhmogSllev-RcyPlRujow1aXgp-kiOzeVnCuZVLczewtXwH7W-o3PMmc8GSq8eZNZ_y4vjQMzFfaqhWoJdGsR8rS8dBmJznplTroqsx7MJeDX7aOZHU-bdbMZsuU2Z--OgVIG9";
    const config = {
        method: 'get',
        url:"https://api.spotify.com/v1/me/playlists",
        headers: {
            'Authorization': `Bearer ${token}`
        }
      };

    const response = await axios(config)
    .then((res) => {
        console.log('RESULTAT',res.data.items)
      return res
    })
    .catch(function (error) {

        return error
    });
    console.log("RESPONSE SU",response)
    return response.data;
}) 

const playlistsSlice = createSlice({
    name:"playlist",
    initialState:{
        playlists:[],
        status:'idle',
        error:null
    }, 
    reducers: { 
        postAdded: {
            reducer(state, action) {
              state.playlists.push(action.payload)
            },
            prepare(title, content, userId) {
              // omit prepare logic
            }
          },
        playlistUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPlaylist = state.playlists.find(playlist => playlist.id === id)
            if (existingPlaylist) {
                existingPlaylist.title = title
                existingPlaylist.content = content
            }
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchPlaylists.pending, (state, action) => {
            console.log("PENDING")

            state.status = 'loading'
          })
          .addCase(fetchPlaylists.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // state = state.playlists.push(...action.payload.items)
            state.playlists = action.payload.items
          })
          .addCase(fetchPlaylists.rejected, (state, action) => {
            console.log("FAILED")
            state.status = 'failed'
            state.error = action.error.message
          })
      },
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        playlists: playlistsSlice.reducer
    }
})


// export const toggleTask = (id) => {
//     return {
//         type:'todo/toggleTask',
//         payload: id
//     }
// }

export const {toggleTask} = todoSlice.actions

