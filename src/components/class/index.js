import React, { useState } from 'react'

//components
import Timeline from './timeline'
import Members from './members'
import Doubts from './doubts'
import { Theaters, Notes } from '@material-ui/icons'

const Classes = ({match}) => {
    const [ activeTile, setActiveTile ] = useState(1) 

    return(
        <div className='class-page'>
            <div className="class-page__header-tile">
                <div className="class-page__header">
                    <div className="class-page__title">Physics</div>
                    <button className='class-page__title-btn'>Live Class</button>
                </div>
                <div className="class-page__nav">
                    <ul>
                        <li className={activeTile===1? 'active': ''} onClick={() => setActiveTile(1)} >Records</li>
                        <li className={activeTile===2? 'active': ''} onClick={() => setActiveTile(2)}>Activities</li>
                        <li className={activeTile===3? 'active': ''} onClick={() => setActiveTile(3)}>Doubt</li>
                        <li className={activeTile===4? 'active': ''} onClick={() => setActiveTile(4)}>Members</li>
                    </ul>
                </div>
            </div>
            {/* {match.params.classid} */}
            <div className='class-page__content'>
                {activeTile === 1 && <> 
                    <div className="class-page__records">
                        <div className="record-tile">
                            <Theaters />
                            <span className='margin-left-auto margin-top-auto'>My Recordings</span>
                        </div>
                        <div className="record-tile">
                            <Notes />
                            <span className='margin-left-auto margin-top-auto'>My Notes</span>
                        </div>
                    </div>
                </>}
                {activeTile === 2 && <Timeline />}
                {activeTile === 3 && <Doubts />}
                {activeTile === 4 && <Members />}
            </div>
        </div>
    )
}

export default Classes