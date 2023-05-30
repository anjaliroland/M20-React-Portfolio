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
                <h1>Send me a message!</h1>
                <form className="form">
                    <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    />
                    <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                    />
                    <input
                    value={comment}
                    name="comment"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Comment"
                    />
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </main>
    )
}