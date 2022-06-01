
import React, {useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { signIn } from '../../../store/slices/authSlicer';
import '../../../styles/Login.css';

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({username: '', password: ''});
    const [isValidData, setIsValidData] = useState(true);
    const onSubmit = (event: React.FormEvent) =>{
        event.preventDefault();
        if(userData.username === process.env.REACT_APP_USERNAME && userData.password === process.env.REACT_APP_PASSWORD) {
            dispatch(signIn(true));
            setIsValidData(true);
            navigate('/todos', {replace: true});
        }
        else {
            setIsValidData(false);
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsValidData(true);
        if(event.target.id === 'username'){
            setUserData({...userData, username: event.target.value})
        }
        else if(event.target.id === 'password'){
            setUserData({...userData, password: event.target.value})
        }
    }
    return(
        <div>
            <div>
                <form>
                    <h2>SignIn</h2>
                    <div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input id='username' type="text" onChange={handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input id='password' type="password" onChange={handleChange} required/>
                        </div>
                        <div>
                            <button onClick={onSubmit}>Login</button>
                        </div>
                        <div>
                            {
                                !isValidData && <span>Invalid Username or Password</span>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;