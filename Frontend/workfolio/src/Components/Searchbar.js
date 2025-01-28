import React, { useCallback, useState } from 'react';
import axios from 'axios';
import Constant from '../Constant.js';
import '../Componentcss/searchbar.css';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';

import { setSearchResultShownOrNot ,setsearchlist,setsearchclickuserdata } from '../Store/UserDataSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Searchbar = () => {
    const dispatch = useDispatch();
    const appendtosearchbar = (data) => {
        console.log("data", data);
        dispatch(setsearchlist([data]));
    };
    const history = useNavigate();
    const searchresultshownornot=useSelector(
        (state)=>state.userdata.searchresultshownornot);
    const searchlist=useSelector(
            (state)=>state.userdata.searchlist);

    const search = async (e) => {
        try {
            const input = e.target.value;
            console.log("input", input);    
            
            const response = await axios.post(`${Constant}/api/v1/users/finduser`, {
                email: input
            });
            
            appendtosearchbar(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const debouncedChange = useCallback(debounce((e) => search(e), 300), []);

    const handleChange = (e) => {
        dispatch(setSearchResultShownOrNot(true));
        debouncedChange(e);
    };

    const handleUserClick = async (username) => {
        try {
            alert(username);
            const response = await axios.post(`${Constant}/api/v1/users/finduser`, {
                email: username
            });
            console.log("response", response.data);
            
            history('/searchuserprofile');
            dispatch(setsearchclickuserdata(response.data));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div id='SearchBar'>
            <input className="searchbar" placeholder='search' onChange={handleChange} />
            {searchresultshownornot && <ul id="searchlist">
                {searchlist.map((user, index) => (
                    
                    
                    <li className='liinsearchlist' key={index} onClick={() => handleUserClick(user.username)}>
                        {user.username}
                    </li>
                ))}
            </ul>}
            
            
        </div>
    );
};

export default Searchbar;