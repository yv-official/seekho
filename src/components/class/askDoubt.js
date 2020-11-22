import React from 'react'

const AskDoubt = ({ portalRef, displayPortal, setDisplayPortal }) =>{
    return(
        <div className='portal-container' ref={portalRef} onClick={() => {setDisplayPortal(!displayPortal)}}>
            <div className='portal' onClick={(e) => { e.stopPropagation() }}>
                <div>ask</div>
            </div>
        </div>
    )
}

export default AskDoubt