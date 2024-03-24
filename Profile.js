import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'Sirajum Monir',
    id: '21701005',
    location: 'chandgaon, chittagong',
    paymentStatus: 'paid',
    paymentOption: '',
    profilePicture: localStorage.getItem('profilePicture') || '', // Initialize with stored value
    workingAt: '', // Add working at state
    status: '' // Add status state
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userDataFromBackend = {
        name: 'Sirajum Monir',
        id: '21701005',
        location: 'Chandgaon, Chittagong',
        paymentStatus: 'paid',
        paymentOption: '',
        workingAt: 'University of Chittagong', // Initialize with empty string
        status: 'Admin' // Initialize with empty string
      };
      setUserData(userDataFromBackend);
    };

    fetchUserData();
  }, []);

  const handlePaymentOptionChange = (e) => {
    setUserData({ ...userData, paymentOption: e.target.value });
  };

  const handleWorkingAtChange = (e) => {
    setUserData({ ...userData, workingAt: e.target.value });
  };

  const handleStatusChange = (e) => {
    setUserData({ ...userData, status: e.target.value });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '650px', width: '100%', backgroundColor: '#ffffff', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <h2>Profile</h2>
        <div style={{ marginBottom: '20px' }}>
          {/* Display the profile picture */}
          <img src={process.env.PUBLIC_URL + '/Monir.jpg'} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Name:</strong> {userData.name}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>ID:</strong> {userData.id}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Location:</strong> {userData.location}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Payment Status:</strong> {userData.paymentStatus}
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Payment Option:</strong>
          <select value={userData.paymentOption} onChange={handlePaymentOptionChange} style={{ marginLeft: '10px' }}>
            <option value="">Select an option</option>
            <option value="Bikash">Bikash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
          </select>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Working At:</strong>
          <input type="text" value={userData.workingAt} onChange={handleWorkingAtChange} style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <strong>Status:</strong>
          <input type="text" value={userData.status} onChange={handleStatusChange} style={{ marginLeft: '10px' }} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
