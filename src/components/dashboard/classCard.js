import React from 'react'
import { Link } from 'react-router-dom'

//images
import backgroundImage from '../../images/class-card-background.jpg'

const ClassCard = ({subject, teacher, link}) => {
    return(
        <div className='class-card'>
            <div className='class-card__header'>
                <img src={backgroundImage} alt='class background' />
                <Link className='link' to={`class/${link}`}><div className='class-card__title'>{subject}</div></Link>
            </div>
            <div className='class-card__teacher'>{teacher}</div>
        </div>
    )
}

export default ClassCard