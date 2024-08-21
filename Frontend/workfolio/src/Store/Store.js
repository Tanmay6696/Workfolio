import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import UserDataSlice from './UserDataSlice'
export const Store = configureStore({
    reducer:{
        userdata:UserDataSlice,
    },
});
