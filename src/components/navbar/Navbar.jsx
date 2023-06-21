import React from 'react';
import './Navbar.less'
import Logo from '../../assets/img/navbar-logo.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" className="navbar__logo" />
            <div className="navbar__header">MERN CLOUD</div>
            <div className="navbar__login">Войти</div>
            <div className="navbar__registration">Регистрация</div>
        </div>
    );
};
export default Navbar;