import {createSlice} from '@reduxjs/toolkit';
const initialState={
    userdata:null
}
const UserDataSlice = createSlice({
    name:'UserData',
    initialState,
    reducers:{
        setUserdata:(state,action)=>{
            state.userdata=action.payload;
        }
    }
})
export const {setUserdata}=UserDataSlice.actions;
export  default UserDataSlice.reducer;