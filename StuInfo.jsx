import React, { useState } from 'react';

const StudentForm = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    Institution: ''
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
      const response = await fetch('http://localhost/student.php', {
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
          email: '',
          location: '',
          Institution: ''
        });
        onPageChange('StuInformation'); // Navigate to StuInformation upon successful form submission
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div style={{ border: '2px solid #ddd', borderRadius: '5px', padding: '20px', width: '400px', height: '500px', margin: '0 auto', backgroundColor: 'white' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2>Add New Student</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', marginRight: '60px' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', marginRight: '64px' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', marginRight: '39px' }}>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', marginRight: '27px' }}>Institution:</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold', marginRight: '0px' }}>Salary Offered:</label>
          <input
            type="tel"
           
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
