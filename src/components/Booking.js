import React, { useRef } from 'react';
import "./Booking.css"
import emailjs from '@emailjs/browser';

function Booking() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('booking_service', 'booking_contact_form', form.current, {
          publicKey: 'wNijasEO-1hSbN_ZV',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Success! We will get back in touch with you as soon as possible. We appreciate your interest and your support!");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div className='parent_container'>
            <div className='booking_form'>
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Book The Band</h1>
                    <label>Name *</label>
                    <input type="text" name="from_name" required/>
                    <label>Email *</label>
                    <input type="email" name="from_email" required/>
                    <label>Type of Function *</label>
                    <input type="text" name="function_type"  required/>
                    <label>Date(s) *</label>
                    <input type="text" name="date" required/>
                    <label>Location *</label>
                    <input type="text" name="location" required/>
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}
export default Booking;