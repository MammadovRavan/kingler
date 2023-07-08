import React, { useState } from 'react';
import './Form.css'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      setErrors({});
      setSuccessMessage('Message sent succesfully!');
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Name validation (required field)
    if (!data.name) {
      errors.name = 'Name is required';
    }

    // Email validation (required and valid email format)
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    // Subject validation (required field)
    if (!data.subject) {
      errors.subject = 'Subject is required';
    }

    // Message validation (required field)
    if (!data.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='forms'>
        <input
        placeholder='Name'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ borderColor: errors.name ? 'red' : '' }}
        />
<div className="error"> 
       {errors.name && <span>{errors.name}</span>}
</div>
      </div>

      <div className='forms'>
        <input
        placeholder='E-mail'
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ borderColor: errors.email ? 'red' : '' }}
        />
<div className="error">
{errors.email && <span>{errors.email}</span>}
</div>
      </div>

      <div className='forms'>
        <input
        placeholder='Subject'
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{ borderColor: errors.subject ? 'red' : '' }}
        />
      <div className="error">
      {errors.subject && <span>{errors.subject}</span>}
      </div>
      </div>

      <div className='form-text'>
        <textarea
        placeholder='Message'
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ borderColor: errors.message ? 'red' : '' }}
        />
      <div className="error">
      {errors.message && <span>{errors.message}</span>}
      </div>
      </div>

      <div className="form-button">
      <button type="submit">SEND MESSAGE</button>
      </div>

<div className="success">
{successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
</div>
    </form>
  );
};

export default Form;