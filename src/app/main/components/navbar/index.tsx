import React from 'react'
import {NavLink} from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { logout } from '../../../store/slices/authSlicer';
import '../../../styles/Navbar.css'

function Navbar() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout(false));
  }
  return (
    <div className='nav-wrapper'>
      <NavLink style={({isActive}) => ({backgroundColor: isActive ? '' : ''})} to={'/todos'} defaultChecked>ToDo</NavLink>
      <NavLink style={({isActive}) => ({backgroundColor: isActive ? '' : ''})} to={'/'} onClick={handleLogout}>Logout</NavLink>
    </div>
  )
}

export default Navbar