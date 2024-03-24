import React, { useState, useEffect } from 'react';

const SearchStu = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://localhost/searchstu.php?location=${encodeURIComponent(searchQuery)}`);
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error('Failed to fetch student information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching student information:', error.message);
      }
    };

    fetchStudentData();
  }, [searchQuery]);

  useEffect(() => {
    setFilteredStudents(students.filter(student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.school.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [searchQuery, students]);

  const handleSearch = () => {
    
  };

  return (
    <div className="container">
      <h1>Search Student by Location</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search by location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cardContainer">
        {filteredStudents.map((student) => (
          <div key={student.id} className="card">
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Location: {student.location}</p>
            <p>Institution: {student.school}</p>
            <p>Salary offerd:5000</p>
            
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
          height: 200px;
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

export default SearchStu;



