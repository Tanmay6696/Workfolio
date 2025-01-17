import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Constant from '../Constant.js';

//async to call data
export const fetchusersdata=createAsyncThunk(
    'users/fetchusersdata',
    async(usersss)=>{
        console.log("hi1",usersss);
        
        const response=await axios.get(`${Constant}/api/v1/getotherUserdetails?usersss=${usersss}`);
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
        email:''
    },
    reducers:{
        setUserdata:(state,action)=>{
            console.log("hi");
            
            state.userdata=action.payload;
        },
        setAccessToken:(state,action)=>{
            state.accessToken=action.payload;
        },
        setEmails:(state,action)=>{
            console.log("inside the email");
            state.email=action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchusersdata.pending,(state)=>{
            state.status='loading';
        })
        .addCase(fetchusersdata.fulfilled,(state,action)=>{
            state.status='succeeded';
            state.allusersdata=[...state.allusersdata, ...action.payload];
        })
        .addCase(fetchusersdata.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        });

    },
});
export const {setUserdata,setAccessToken,setEmails}=UserDataSlice.actions;
export  default UserDataSlice.reducer;