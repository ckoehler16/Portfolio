import React, { useState } from 'react';
import Footer from '../Footer';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // empty out the initial state of the form, manage form data in the state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // deconstruct the formState object to get the name, email, and message
    const { name, email, message } = formState;

    // error message state
    const [errorMessage, setErrorMessage] = useState('');

    // handle the change event for the form inputs
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address');
            }
            else {
                setErrorMessage('');
            }
        } // check if name and message are empty
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }
        // set the formState object to the value of the input
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // handle the submit event for the form
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div>
            <div className='contact-section'>
                <h1 className='contact-header'>Contact Me</h1>
                <form className='contact-form'>
                    <div className='input-section'>
                        <label htmlFor='name'>Name:</label>
                        <input className="fill" type='text' defaultValue={name} onBlur={handleChange} name='name' placeholder='Your Name' />
                    </div>
                    <div className='input-section'>
                        <label htmlFor='email'>Email:</label>
                        <input className="fill" type='email' defaultValue={email} onBlur={handleChange} name='email' placeholder='YourEmail@test.com' />
                    </div>
                    <div className='message-section'>
                        <label htmlFor='message'>Message:</label>
                        <textarea className="fill" type='text' name='message' defaultValue={message} onBlur={handleChange} rows='5' placeholder='Reason for contacting...' />
                    </div>
                    {errorMessage && (
                        <div className='error-message'>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button className='submit-btn' type='submit' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default ContactForm;