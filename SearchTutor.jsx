import React, { useState, useEffect } from 'react';

const SearchTutor = () => {
  const [tutors, setTutors] = useState([]);
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredTutors, setFilteredTutors] = useState([]);

  useEffect(() => {
    const fetchTutorData = async () => {
      try {
        const response = await fetch(`http://localhost/searchtutor.php?location=${encodeURIComponent(searchLocation)}`);
        if (response.ok) {
          const data = await response.json();
          setTutors(data); // Assuming the response is an array of tutor objects with the specified attributes
        } else {
          console.error('Failed to fetch tutor information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching tutor information:', error.message);
      }
    };

    fetchTutorData();
  }, [searchLocation]);

  useEffect(() => {
    setFilteredTutors(tutors.filter(tutor => tutor.location.toLowerCase().includes(searchLocation.toLowerCase())));
  }, [searchLocation, tutors]);

  const handleSearch = () => {
    // Triggered when search button is clicked
    // Here you can perform additional filtering or sorting if needed
    // For now, it's handled in the useEffect above
  };

  return (
    <div className="container">
      <h1>Search Tutor by location</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cardContainer">
        {filteredTutors.map((tutor) => (
          <div key={tutor.id} className="card">
            <p>Name: {tutor.name}</p>
            <p>Availability: {tutor.availability}</p>
            <p>Mobile Number: {tutor.mobileNumber}</p>
            <p>Email: {tutor.email}</p>
            <p>Location: {tutor.location}</p>
            <p>Institution: {tutor.institution}</p>
            <p>Current Subject: {tutor.currentSubject}</p>
          </div>
        ))}
      </div>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .search {
          margin-bottom: 20px;
        }
        .search input {
          padding: 8px;
          margin-right: 10px;
        }
        .search button {
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
        .search button:hover {
          background-color: #0056b3;
        }
        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          width: 300px;
          height: 350px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          background-color: white;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default SearchTutor;
