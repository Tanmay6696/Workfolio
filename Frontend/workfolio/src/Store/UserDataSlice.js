import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//async to call data
export const fetchusersdata=createAsyncThunk(
    'users/fetchusersdata',
    async()=>{
        console.log("hi1");
        
        const response=await axios.get('http://localhost:3000/api/v1/getotherUserdetails');
        console.log("hi2" ,response);

        return response.data;
    }
)
const UserDataSlice = createSlice({
    name:'UserData',
    initialState:{
        allusersdata:[],
        status:'idle',
        userdata:[],
        error:null,
        accessToken:'',
    },
    reducers:{
        setUserdata:(state,action)=>{
            console.log("hi");
            
            state.userdata=action.payload;
        },
        setAccessToken:(state,action)=>{
            state.accessToken=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchusersdata.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchusersdata.fulfilled,(state,action)=>{
            state.status='succeeded';
            state.allusersdata=action.payload;
        })
        .addCase(fetchusersdata.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        });

    },
});
export const {setUserdata,setAccessToken}=UserDataSlice.actions;
export  default UserDataSlice.reducer;