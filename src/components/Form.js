import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

export default function Form() {
//states of the form

    const [user, setUser] = useState([])
    const [subButton, setSubButton] = useState(false)
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    })
    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
})

//schema

const schema = yup.object().shape({
    name: yup.string().required('You must enter a name.'),
    email: yup.string().required('You must enter a valid email.'),
    password: yup.string().required('You must enter a password.'),
    terms: yup.boolean().oneOf([true], 'You must agree to terms and conditions')
})


//validate

const onValidate = event => {
    yup.reach(schema, event.target.name)
    .validate(event.target.value)
    .then(valid => {
        setErrors({
            ...errors, [event.target.name]: ''  
         })
    })
    .catch(error => {
        setErrors({
            ...errors, [event.target.name]: error.errors[0]
        })
    })
}

useEffect(() => {
    schema.isValid(formState).then(valid => setSubButton(!valid))
}, [formState])

//change handler

const inputChange = event => {
    const info = {...formState, [event.target.name]:
     event.target.type === 'checkbox' ? event.target.checked
    : event.target.value
    }
    onValidate(event)
    setFormState(info)
}



const submit = event => {
    event.preventDefault()
    const newUser = { 
        user: formState.name.trim(),
        email: formState.email.trim(),
        password: formState.password,
        terms: formState.terms
}
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
// debugger
        setUser([...user, res.data])
        setFormState({
            name: '',
            email: '',
            password: '',
            terms: event.target.reset()
        })
    })
    // debugger
    .catch(err => { console.log(err)
    })

}

    return (
        <form onSubmit={submit}>

            <label htmlFor='name'>
            Name
            <input id='name'
            type="text"
            name='name'
            placeholder="Name"
            value={formState.name}
            onChange={inputChange}
             />
             {errors.name.length > 0 ? (<p className='Errors'>{errors.name}</p>): null}
            </label>

            <label htmlFor='email'>
            Email
            <input id='email'
            type="text"
            name='email'
            placeholder="Email"
            value={formState.email}
            onChange={inputChange}
             />
             {errors.email.length > 0 ? (<p className='Errors'>{errors.email}</p>): null}
            </label>

            <label htmlFor='password'>
            Password
            <input id='password'
            type='text'
            name='password'
            placeholder="Password"
            value={formState.password}
            onChange={inputChange}
             />
             {errors.password.length > 0 ? (<p className='Errors'>{errors.password}</p>): null}
            </label>

            <label htmlFor='terms' className='checkbox'>
                Check this box to agree to our Terms and Conditions
            <input
            type='checkbox'
            name='terms'
            value={formState.terms}
            onChange={inputChange}
             />
             {errors.name.length > 0 ? (<p className='Errors'>{errors.terms}</p>): ''}
            </label>
            
            

            <button id='submitBtn' disabled={subButton} type='submit'>Submit</button>
            <pre>{JSON.stringify(user, null, 1)}</pre>
        </form>
    )
}