import React, { useState, useEffect } from 'react';

const StuInformation = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost/students.php');
        if (response.ok) {
          const data = await response.json();
          setStudents(data); // Assuming the response is an array of student objects with the specified attributes
        } else {
          console.error('Failed to fetch student information:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching student information:', error.message);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="container">
      <h1>Student Information</h1>
      <div className="cardContainer">
        {students.map((student) => (
          <div key={student.id} className="card">
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Location: {student.location}</p>
            <p>Institution: {student.school}</p>
            <p>Salary Offered: 5000</p>
          </div>
        ))}
      </div>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cardContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .card {
          width: 300px;
          height: 250px;
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

export default StuInformation;
