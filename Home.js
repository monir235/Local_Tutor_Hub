import React, { useState } from 'react';

function Home() {
  const [hoveredCard, setHoveredCard] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const cardStyle = (cardName) => ({
    width: '330px',
    margin: '10px',
    textAlign: 'center',
    backgroundColor: hoveredCard === cardName ? 'skyblue' : 'lightblue',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    overflow: 'hidden',
  });

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  const tutorInfoCardStyle = {
    ...cardStyle('tutorInfoCard'),
    width: '600px',
  };

  const bookingListData = ["1. Sirajum Monir", "2. Raiqul Islam", "3. Rishad Hossain"];
  const assignTeacherListData = ["1. Sabbir hossain", "2. Rakib Islam", "3. Sadman Hasan"];
  const studentListData = ["1. MOHAIMIN", "2. NISHAD", "3. OMIN GUPTA"];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Fetch search results only if search term is not empty
    if (value.trim() !== '') {
      fetch(`/search.php?searchTerm=${encodeURIComponent(value)}`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.error('Error:', error));
    } else {
      setSearchResults([]); // Clear search results if search term is empty
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', bottom: '660px', right: '70px' }}>
        <input
          type="text"
          placeholder="Search for Tuition..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: '200px', padding: '7px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={cardStyle('assignTeacherList')} onMouseEnter={() => setHoveredCard('assignTeacherList')} onMouseLeave={() => setHoveredCard('')}>
          <img src="/bolla.jpg" alt="Assign Teacher List" style={imageStyle} />
          <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Assign Teacher List</h2>
          {assignTeacherListData.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
        <div style={cardStyle('studentList')} onMouseEnter={() => setHoveredCard('studentList')} onMouseLeave={() => setHoveredCard('')}>
          <img src="/student.jpg" alt="Student List" style={imageStyle} />
          <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Student List</h2>
          {studentListData.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
        <div style={cardStyle('bookingList')} onMouseEnter={() => setHoveredCard('bookingList')} onMouseLeave={() => setHoveredCard('')}>
          <img src="/booking.jpeg" alt="Booking List" style={imageStyle} />
          <h2 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Booking List</h2>
          {bookingListData.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
      </div>
      {searchResults.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={tutorInfoCardStyle} onMouseEnter={() => setHoveredCard('tutorInfoCard')} onMouseLeave={() => setHoveredCard('')}>
            <h2>Tutor Information</h2>
            {searchResults.map((tutor, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <h3>{tutor.name}</h3>
                <p>Email: {tutor.email}</p>
                <p>Contact Number: {tutor.contact_number}</p>
                <p>Address: {tutor.address}</p>
                <p>University: {tutor.university}</p>
                <p>Department: {tutor.department}</p>
                <p>Semester: {tutor.semester}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
