import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const whatsappNumber = '9531468479'; // Your WhatsApp number

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Validation ---
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(formData.name)) {
      alert('Please enter a valid name. (Only letters and spaces are allowed)');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address. (e.g., example@domain.com)');
      return;
    }
    
    // --- Proceed to WhatsApp ---
    const message = `New Inquiry from Website:\n\n*Name:*\n${formData.name}\n\n*Email:*\n${formData.email}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Get In Touch</h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;