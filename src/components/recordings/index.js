import React from 'react'


const Recordings = ({match}) => {
    return (
        <> 
            <h1>record id: {match.params.recordid}</h1>
            <div className="recordings">
                My recordings
            </div>
        </>
    )
}


export default Recordings;