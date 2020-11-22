import React from 'react'



const notes = ({match}) => {
    return (
        <>
        <h1>Note id: {match.params.noteid}</h1>
        <div className="notes-list">
            <h2 className="note-title">
                note title
            </h2>
            <p className="note-body">
                note body
            </p>
        </div>
        <form action="">
            {/* will open model */}
            <button type="submit">Add note</button>
        </form>
        </>
    )
}

export default notes;

