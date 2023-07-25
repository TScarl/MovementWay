import React, { useState } from "react";

export default function Contact() {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [isEmailValid, setIsEmailValid] = useState(true);
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        setIsEmailValid(isValid);
    
        // Submit the form if all fields are valid
        if (name && email && message && isValid) {
          // currently messages are sent to the console...
          console.log("Form submitted:", { name, email, message });
    
          // Reset form fields
          setName("");
          setEmail("");
          setMessage("");
          setIsEmailValid(true);
        }
      };
    
      return (
        <div className="contact-container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
    
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {!isEmailValid && <p className="error">Please enter a valid email address.</p>}
            </div>
    
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ height: "150px" }}
              ></textarea>
            </div>
    
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
    