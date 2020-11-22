import React from 'react'
import { Link } from 'react-router-dom'


//components
import ClassCard from './classCard'


const Dashboard = () => {

    return (
        <>
            <div className="dashboard">
                <div className="dashboard__heading">
                    Your Classes
                </div>
                <div className="dashboard__classes">
                    <ClassCard subject='Physics' teacher='Narendra Kohli' link='dsadsad' />
                    <ClassCard subject='Physics' teacher='Narendra Kohli' link='sdadsad' />
                    <ClassCard subject='Physics' teacher='Narendra Kohli' link='sdagdsg' />
                    <ClassCard subject='Physics' teacher='Narendra Kohli' link='sda3qdr' />
                    <ClassCard subject='Physics' teacher='Narendra Kohli' link='fwef32e' />
                    <ClassCard subject='Physics' teacher='Narendra Kohli' link='43rfdsf' />
                </div>
            
            </div>
        </>
    )

}


export default Dashboard    
