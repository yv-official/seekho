import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'

//images
import backgroundImage from '../../images/home-background.jpg'

//component starts
const HomePage = () => {
    const [ formValues, setFormValues ] = useState({username: '', password: ''})

    //function to handle form values changes
    const handleFormValues = (e) => {
        const name = e.target.name
        const value = e.target.value

        //pass field values to the state
        setFormValues({...formValues, [name]: value})
    }

    //function to handle form submit
    const handleFormSubmit = () => {
        console.log(formValues)
    }

    return(
        <div className='body-container homepage'>
            {/* background image: cover */}
            <img  class="homepage__img" src={backgroundImage} alt='background' />
            
            {/* homepage left part */}
            <div className='homepage__left'>
                <span className='main-logo flex margin-bottom-2'>
                    SEEKHO
                </span>
                <span className='flex size-1-8 font-white margin-bottom-1'>
                    Register
                </span>
                <div className='button-container'>
                    <Link className='link' to='/register/student'><Button className='margin-right-2' variant='contained' color='primary' >Student</Button></Link>
                    <Link className='link' to='/register/institute'><Button variant='contained' color='primary'>Institute</Button></Link>
                </div>
            </div>

            {/* home page right part */}
            <div className='homepage__right'>
                <div className='form_container'>
                    <form>
                        <span className='form-heading flex margin-bottom-2 center'>Login</span>
                        <TextField
                            name='username'
                            className='margin-bottom-2'
                            type='text'
                            variant='outlined'
                            label='User Name'
                            value={formValues.username}
                            onChange={(event) => handleFormValues(event)}
                        />

                        <TextField
                            name='password'
                            className='margin-bottom-2'
                            type='password'
                            variant='outlined'
                            label='Password'
                            value={formValues.password}
                            onChange={(event) => handleFormValues(event)}
                        />

                        <Button variant='contained' color='primary' onClick={handleFormSubmit}>
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage