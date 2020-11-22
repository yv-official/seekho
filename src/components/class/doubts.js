import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { AccountCircle } from '@material-ui/icons'

//component
import AskDoubt from './askDoubt'

const Portal = ({ children }) => {
    return ReactDOM.createPortal(children, document.body)
}

const Doubts = () => {
    const [ displayPortal, setDisplayPortal ] = useState(false)
    const portalRef = useRef(null)

    useEffect(() => {
        if(displayPortal && portalRef.current){
            portalRef.current.style.top = '0'
            portalRef.current.style.left = '0'
        }
        else if(!displayPortal && portalRef.current){
            portalRef.current.removeAttribute('style')
        }
    }, [displayPortal])

    const handleAskClick = () => {
        setDisplayPortal(!displayPortal)
    }

    return(
        <>
        {displayPortal && <Portal>
            <AskDoubt portalRef={portalRef} displayPortal={displayPortal} setDisplayPortal={setDisplayPortal} />
        </Portal>}
        <div className='class-page__doubts' >
            <div className='ask' onClick={handleAskClick}>
                <div className='ask__header'><AccountCircle fontSize='small' /> <span className='margin-left-half'>Yashveer Talan</span></div>
                <div className="ask__title">Ask something...</div>
            </div>
            <div className='answers'>
                <div className='answers__header'><AccountCircle fontSize='small' /> <span className='margin-left-half'>Yashveer Talan</span></div>
                <span className="answers__title">What do you mean by Newton's third law of motion</span>
                <span className='answers__answer'>This is my answer to your question</span>
                <div className='answers__footer'>
                    <span>- Rigved Sambyal</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Doubts