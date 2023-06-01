import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "../../styles/Contact.css";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setComment(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        if (comment !== '') {
            return;
        } else {
            setErrorMessage('Message is required');
        }

        setName('');
        setEmail('');
        setComment('');
    }

    return (
        <main>
            <div className="contact">
                <h2>Send me a message!</h2>
                <form className="form">
                    <label>
                        First and Last Name:
                        <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Christopher Robin"
                        />
                    </label>
                    <br/>
                    <label>
                        Email: 
                        <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="c.robin@gmail.com"
                        />
                    </label>
                    <br/>
                    <label>
                        Message:
                        <br/>
                        <textarea
                        value={comment}
                        name="comment"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="ex// Owl suggests we start a book club in Hundred Acre Wood and thinks we should create a web app with details, could you help?"
                        />
                    </label>
                    <br/>
                    <button className="align-self-center" type="button" onClick={handleFormSubmit}>submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                 )}
            </div>
        </main>
    )
}