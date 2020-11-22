import React , { useState, useEffect } from 'react'
import { AccountCircle } from '@material-ui/icons'

const Members = () => {
    const [ data, setData ] = useState({})
    
    useEffect(() => {
        if(!data.members)
            setData({...data, ...sampleValues})
        console.log(data)
    }, [data])

    if(!data.members) return(<div className='class-page__members'><h1>Loading...</h1></div>)
    return(
        <div className='class-page__members'>
            <div className='class-page__members__title'>
                Teacher
            </div>
            <div className='class-page__members__member'>
            <AccountCircle fontSize='small' className='margin-right-half' />{data.members.teacher}
            </div>
            <div className='class-page__members__title second' >
                Students <span className='margin-left-auto flex margin-right-1 size-1-4'>{data.members.students.length}</span>
            </div>
            <div className='class-page__members__members'>
                {data.members.students && data.members.students.length > 0 ?
                
                data.members.students.map((student, index) => (
                    <div className='class-page__members__member' key={index}><AccountCircle fontSize='small' className='margin-right-half' />{student}</div>
                )):
                <div className='class-page__members__member'>
                    No Student joined yet
                </div>}
            </div>
        </div>
    )
}


//sample values for testing
const sampleValues = {
    members: {
        teacher: 'Dr. Narendra Kohli',
        students: [
            "Yashveer Talan",
            'Rigved Sambyal',
            'Ashish Singh', 
            'Aditya Rajput'
        ]
    }
}

export default Members