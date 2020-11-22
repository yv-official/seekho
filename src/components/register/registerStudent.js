import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

//images
import backgroundImage from '../../images/student-background.jpg'

//initial values
const initialValues = {
    name: '',
    email: '',
    phone: '',
    institute: ''
}

const RegisterStudent = () => {
    const [ formValues, setFormValues ] = useState(initialValues)


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
        <div className='body-container register-student'>
            <img className='image' src={backgroundImage} alt='background' />
            <div className='form-container'>
                <form>
                    <span className='form-heading flex margin-bottom-2'>Welcome!</span>
                    <TextField
                        name='name'
                        className='margin-bottom-2'
                        type='text'
                        variant='outlined'
                        label='Full Name'
                        value={formValues.name}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <TextField
                        name='email'
                        className='margin-bottom-2'
                        type='text'
                        variant='outlined'
                        label='Email'
                        value={formValues.email}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <TextField
                        name='phone'
                        className='margin-bottom-2'
                        type='text'
                        variant='outlined'
                        label='Phone Number'
                        value={formValues.phone}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <TextField
                        name='institute'
                        className='margin-bottom-2'
                        type='text'
                        variant='outlined'
                        label='Institute ID'
                        value={formValues.institute}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <Button variant='contained' color='primary' onClick={handleFormSubmit}>
                        Register
                    </Button>
                    
                </form>
            </div>
        </div>
    )
}

export default RegisterStudent