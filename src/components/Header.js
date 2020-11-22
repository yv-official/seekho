import React from 'react';
import { Avatar } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Link } from 'react-router-dom'


// Header component
const Header = () => {

    return (
        <div className='header'> 
            <span className='header__logo'>
                <span className='size-2-2'>S</span>EEKHO
            </span>
            <nav className='nav'>
                <Link className='link' to="/jitsi"><div className='nav__add-button'><Add className='margin-right-half' /> Join Class</div></Link>
                <Avatar>Y</Avatar>
            </nav>
         </div> 
    )

}


export default Header;