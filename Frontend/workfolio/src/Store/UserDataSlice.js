import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Constant from '../Constant.js';

//async to call data
export const fetchusersdata=createAsyncThunk(
    'users/fetchusersdata',
    async(usersss)=>{
        const response=await axios.get(`${Constant}/api/v1/getotherUserdetails?usersss=${usersss}`);     
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
        email:'',
        searchresultshownornot:false,
        searchlist:[] ,
        searchclickuserdata:[]
    },
    reducers:{
        setUserdata:(state,action)=>{            
            state.userdata=action.payload;
        },
        setAccessToken:(state,action)=>{
            state.accessToken=action.payload;
        },
        setEmails:(state,action)=>{
            state.email=action.payload;
        },
        setSearchResultShownOrNot:(state,action)=>{
            state.searchresultshownornot=action.payload;
        },
        setsearchlist:(state,action)=>{
            state.searchlist=action.payload;
        },
        setsearchclickuserdata:(state,action)=>{
            state.searchclickuserdata=action.payload;
        }
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
export const {setUserdata,setAccessToken,setEmails,setSearchResultShownOrNot,setsearchlist,setsearchclickuserdata}=UserDataSlice.actions;
export  default UserDataSlice.reducer;