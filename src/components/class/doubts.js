import React from 'react'
import { AccountCircle } from '@material-ui/icons'



const Doubts = () => {

    return(
        <div className='class-page__doubts'>
            <div className='ask'>
                <div className='ask__header'><AccountCircle fontSize='small' /> <span className='margin-left-half'>Yashveer Talan</span></div>
                <div className="ask__title">Ask something...</div>
            </div>
            <div className='answers'>

            </div>
        </div>
    )
}

export default Doubts