import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

//images
import backgroundImage from '../../images/institute-background.jpg'

const RegisterInstitute = () => {
    const [ formValues, setFormValues ] = useState({})


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

    //return jsx
    return(
        <div className='body-container register-institute'>
            <img className='image' src={backgroundImage} alt='background' />
            <div className='form-container'>
                <form>
                    <span className='form-heading flex margin-bottom-2'>Welcome!</span>
                    <TextField
                        name='instituteName'
                        className='margin-bottom-1'
                        type='text'
                        variant='outlined'
                        label='Institute Name'
                        margin='dense'
                        value={formValues.instituteName}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <TextField
                        name='email'
                        className='margin-bottom-1'
                        type='text'
                        variant='outlined'
                        label='Email'
                        margin='dense'
                        value={formValues.email}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <TextField
                        name='tel'
                        className='margin-bottom-1'
                        type='text'
                        variant='outlined'
                        label='Contact Number'
                        margin='dense'
                        value={formValues.tel}
                        onChange={(event) => handleFormValues(event)}
                    />
                    <TextField
                        name='noOfStudents'
                        className='margin-bottom-2'
                        type='number'
                        variant='outlined'
                        label='No of Students'
                        margin='dense'
                        value={formValues.noOfStudents}
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

export default RegisterInstitute