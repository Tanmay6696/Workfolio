import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Constant from './Constant';
import AllComponentfile from './AllComponentfile';
import LoginorSignupfile from './LoginorSignupfile';
import IndividualUser from './IndividualUser';
import { useDispatch } from 'react-redux';
import { setSearchResultShownOrNot, setsearchlist,setUserdata } from './Store/UserDataSlice';

function App() {
    const [user, setUser] = useState([]);
    const [islogin, setislogin] = useState(false);
    const [elementpath, setelementpath] = useState("/userprofile");
    const [elementvalue, setelementvalue] = useState(<LoginorSignupfile />);
    const [index,Setindex]=useState(0);
    const dispatch = useDispatch();
    const history = useNavigate();
    const paths=[
        {
            name:"/Profile",
            component:<IndividualUser userdata={user} />
        },
        {
            name:"/userprofile",
            component:<LoginorSignupfile />
        }
    ];
    const fetchUserData = async (token) => {
        try {
            const response = await axios.get(`${Constant}/api/v1/users/getdetails`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("fetchUserData", response.data.data);
            setUser(response.data.data);
            
            dispatch(setUserdata(response.data.data));
            return response.data;
        } catch (error) {
            console.error('Failed to fetch user data', error);
            throw error;
        }
    };

    const isTokenExpired = (token) => {
        if (!token) return true;  // If no token, consider it expired
        const payload = JSON.parse(atob(token.split('.')[1]));  // Decode JWT payload
        console.log("isTokenExpired ", payload.exp * 1000 < Date.now());

        return payload.exp * 1000 < Date.now();  // Compare expiration time with current time
    };

    const refreshAccessToken = async () => {
        try {
            const refreshToken = localStorage.getItem('refreshToken');  // Get refresh token

            const response = await axios.post(
                `${Constant}/api/v1/users/refreshaccesstoken`,
                {},
                {
                    headers: { 'x-refresh-token': refreshToken }  // Send refresh token in custom header
                }
            );

            const { accessToken, newRefreshToken } = response.data;
            // console.log("accessToken", response.data.refreshToken);
            // console.log("accessToken", accessToken, "newRefreshToken", newRefreshToken);

            // Update tokens in localStorage
            localStorage.setItem('accessToken', accessToken);
            if (response.data.refreshToken) {
                localStorage.setItem('refreshToken', response.data.refreshToken);  // Optional: if refresh tokens are rotated
            }

            return accessToken;
        } catch (error) {
            console.error('Failed to refresh access token', error);
            // Handle token refresh failure (e.g., log out user)
            throw error;
        }
    };

    axios.interceptors.request.use(async (config) => {
        let token = localStorage.getItem('accessToken');
        if (isTokenExpired(token)) {
            if (!localStorage.getItem('refreshToken')) {
                history('/userprofile');
            } 
        }

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;  // Attach token to request
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    useEffect(() => {
        const initializeUser = async () => {
            try {
                let token = localStorage.getItem('accessToken');
                console.log("token", token);
                let indexvalue=0;
                if (token) {
                    if (isTokenExpired(token)) {
                        token = await refreshAccessToken();
                    }                    
                    setislogin(true);
                    indexvalue=0;
                    
                }
                else{                   
                    console.log("refreshToken", localStorage.getItem('refreshToken'));
                    if(!localStorage.getItem('refreshToken')){
                        history('/userprofile');
                        indexvalue=1;
                        
                    }
                    else{
                        token = await refreshAccessToken();
                        indexvalue=0;
                    }
                      
                    
                    
                    
                }
                console.log("token", token);
                if(token){
                    const userData = await fetchUserData(token);
                    console.log("userData", userData);
                    setUser(userData.data);
                }
                
                
                Setindex(indexvalue);
            } catch (error) {
                console.error('Failed to initialize user', error);
            }
        };

        initializeUser();
    }, []);

    // useEffect(() => {
    //     console.log("userData", user);

    // }, [user]);

    const clickonappcomponent = () => {
        dispatch(setSearchResultShownOrNot(false));
        dispatch(setsearchlist([]));
    };

    return (
        <div className="App" onClick={clickonappcomponent}>
            <Routes>
                <Route path="/" element={<AllComponentfile />} exact />
                <Route path={paths[index].name} element={paths[index].component} />                
            </Routes>
        </div>
    );
}

export default App;