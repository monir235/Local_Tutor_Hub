import React, { useState } from 'react';

const TutorForm = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    mobileNumber: '',
    email: '',
    location: '',
    institution: '',
    currentSubject: '',
    teachingExperience: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/tutor.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Reset form after submission
        setFormData({
          name: '',
          availability: '',
          mobileNumber: '',
          email: '',
          location: '',
          institution: '',
          currentSubject: '',
          teachingExperience: ''
        });
        onPageChange('Tinformation'); // Navigate to Tinformation component after form submission
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{ border: '2px solid #ddd', borderRadius: '5px', padding: '20px', width: '550px',height:'700px', margin: '0 auto', backgroundColor: 'white' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h3>Fill up this form</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'100px' }}>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'65px' }}>Availability:</label>
          <input 
            type="text" 
            name="availability" 
            value={formData.availability} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'30px' }}>Mobile Number:</label>
          <input 
            type="tel" 
            name="mobileNumber" 
            value={formData.mobileNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'110px' }}>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'90px' }}>Location:</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'80px' }}>Institution:</label>
          <input 
            type="text" 
            name="institution" 
            value={formData.institution} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'40px' }}>Current Subject:</label>
          <input 
            type="text" 
            name="currentSubject" 
            value={formData.currentSubject} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
        <label style={{ fontWeight: 'bold',marginRight:'7px' }}>Teaching Experience:</label>
          <input 
            type="text" 
            name="teachingExperience" 
            value={formData.teachingExperience} 
            onChange={handleChange} 
            required 
          />

        </div>
        <div style={{ marginBottom: '15px' }}>

        <label  style={{ fontWeight: 'bold' }}>Amount:</label><br />
        <select id="amount" name="amount" value={formData.amount} onChange={handleChange} required>
          <option value="">Select Amount</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
        </select><br />
          </div>
          <div style={{ marginBottom: '15px' }}>

          <label style={{ fontWeight: 'bold' }}>Payment Option:</label><br />
        <select id="payment_option" name="payment_option" value={formData.payment_option} onChange={handleChange} required>
          <option value="">Select Payment Option</option>
          <option value="Cash">Bikash</option>
          <option value="Card">Nagad</option>
          <option value="Card">Rocket</option>
        </select><br />
  </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>Submit</button>
      </form>
    </div>
  );
};

export default TutorForm;



