import React, { useState } from 'react';

const Stubd = () => {
  const [students, setStudents] = useState([
    {
      studentId: 1,
      name: 'JOY HOSSAIN JONY',
      mobileNumber: '1784336692',
      email: 'jony556@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '3',
      location: 'Bandar',
      accepted: false
  },
  {
      studentId: 2,
      name: 'SHAKIL',
      mobileNumber: '1825697458',
      email: 'sabbirbolla@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '4',
      location: 'Bandar',
      accepted: false
  },
  {
      studentId: 3,
      name: 'MOHAIMIN',
      mobileNumber: '1694586655',
      email: 'chayonayon71@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '2',
      location: 'Chandgaon',
      accepted: false
  },
  {
      studentId: 4,
      name: 'NISHAD',
      mobileNumber: '1581156784',
      email: 'sabbirhossainmonir@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Hathazari',
      accepted: false
  },
  {
      studentId: 5,
      name: 'OMIN GUPTA',
      mobileNumber: '1224456678',
      email: 'A@gmail.com',
      salaryOffer: '4000',
      dayPerWeek: '3',
      location: 'Khulshi',
      accepted: false
  },
  {
      studentId: 6,
      name: 'MUHAMMED SHAHEEN',
      mobileNumber: '1521563405',
      email: 'muhammedshaheen27may@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '3',
      location: '2no gate',
      accepted: false
  },
  {
      studentId: 7,
      name: 'ABDUL MANNAN',
      mobileNumber: '1842634195',
      email: 'abdulmannanrafin@gmail.com',
      salaryOffer: '8000',
      dayPerWeek: '3',
      location: 'Cokhbazar',
      accepted: false
  },
  {
      studentId: 8,
      name: 'MUSTAFA',
      mobileNumber: '1234567895',
      email: 'Hossainalamgir@gmail.com',
      salaryOffer: '7000',
      dayPerWeek: '3',
      location: '2 no gate',
      accepted: false
  },
  {
      studentId: 9,
      name: 'RAJU AHMED',
      mobileNumber: '1773720851',
      email: 'Abc@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Rangpur',
      accepted: false
  },
  {
      studentId: 10,
      name: 'FARUK',
      mobileNumber: '1868728665',
      email: 'omarmdfaruk098@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Pahartali',
      accepted: false
  },
  {
      studentId: 11,
      name: 'SUMON',
      mobileNumber: '1912356758',
      email: 'mdshafayet171@gmail.com',
      salaryOffer: '4000',
      dayPerWeek: '4',
      location: 'chawkbazar',
      accepted: false
  },
  {
      studentId: 12,
      name: 'ABDULLAH',
      mobileNumber: '1600000000',
      email: '123@yahoo.com',
      salaryOffer: '6000',
      dayPerWeek: '3',
      location: 'Chandgaon',
      accepted: false
  },
  {
      studentId: 13,
      name: 'FAHIM',
      mobileNumber: '1789090376',
      email: 'shtasim6251@gmail.com',
      salaryOffer: '3000',
      dayPerWeek: '3',
      location: 'Pahartoli',
      accepted: false
  },
  {
      studentId: 14,
      name: 'MUNTAHA',
      mobileNumber: '1234567891',
      email: 'jkjkjk@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '3',
      location: 'Sholoshohor',
      accepted: false
  },
  {
      studentId: 15,
      name: 'NAYEEM',
      mobileNumber: '1823456789',
      email: 'nayeemnayeem@gmail.com',
      salaryOffer: '5000',
      dayPerWeek: '4',
      location: 'Nasirabad',
      accepted: false
  },
  {
      studentId: 16,
      name: 'monir',
      mobileNumber: '1234',
      email: 'monir@gmail.com',
      salaryOffer: '2000',
      dayPerWeek: '3',
      location: 'chandgaon',
      accepted: false
  },
  {
    studentId: 17,
    name: 'michel hasan',
    mobileNumber: '1784336692',
    email: 'jony556@gmail.com',
    salaryOffer: '7000',
    dayPerWeek: '3',
    location: 'Bandar',
    accepted: false
  },
  {
    studentId: 18,
    name: 'Sara Ahmed',
    mobileNumber: '1898765432',
    email: 'saraahmed@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Khulshi',
    accepted: false
  },
  {
    studentId: 19,
    name: 'Ali Khan',
    mobileNumber: '1987654321',
    email: 'alikhan@example.com',
    salaryOffer: '5500',
    dayPerWeek: '3',
    location: 'Halishahar',
    accepted: false
  },
  {
    studentId: 20,
    name: 'Maria Islam',
    mobileNumber: '1876543219',
    email: 'mariaislam@example.com',
    salaryOffer: '6500',
    dayPerWeek: '5',
    location: 'Agrabad',
    accepted: false
  },
  {
    studentId: 21,
    name: 'Ahmed Rahman',
    mobileNumber: '1765432198',
    email: 'ahmedrahman@example.com',
    salaryOffer: '5000',
    dayPerWeek: '4',
    location: 'Pahartoli',
    accepted: false
  },
  {
    studentId: 22,
    name: 'Fatima Khan',
    mobileNumber: '1654321987',
    email: 'fatimakhan@example.com',
    salaryOffer: '6000',
    dayPerWeek: '3',
    location: 'Nasirabad',
    accepted: false
  },
  {
    studentId: 23,
    name: 'Hassan Ali',
    mobileNumber: '1543219876',
    email: 'hassanali@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Chittagong University',
    accepted: false
  },
  {
    studentId: 24,
    name: 'Aisha Rahman',
    mobileNumber: '1432198765',
    email: 'aisharahman@example.com',
    salaryOffer: '5500',
    dayPerWeek: '3',
    location: 'Agrabad',
    accepted: false
  },
  {
    studentId: 25,
    name: 'Kamal Hussain',
    mobileNumber: '1321987654',
    email: 'kamalhussain@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Halishahar',
    accepted: false
  },
  {
    studentId: 26,
    name: 'Zara Khan',
    mobileNumber: '1219876543',
    email: 'zarakhan@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Pahartoli',
    accepted: false
  },
  {
    studentId: 27,
    name: 'Imran Hussain',
    mobileNumber: '1098765432',
    email: 'imranhussain@example.com',
    salaryOffer: '5000',
    dayPerWeek: '3',
    location: 'Khulshi',
    accepted: false
  },
  {
    studentId: 28,
    name: 'Sofia Ahmed',
    mobileNumber: '1987654321',
    email: 'sofiaahmed@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Chittagong University',
    accepted: false
  },
  {
    studentId: 29,
    name: 'Yusuf Rahman',
    mobileNumber: '1876543210',
    email: 'yusufrahman@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Halishahar',
    accepted: false
  },
  {
    studentId: 30,
    name: 'Amina Khan',
    mobileNumber: '1765432109',
    email: 'aminakhan@example.com',
    salaryOffer: '5500',
    dayPerWeek: '3',
    location: 'Nasirabad',
    accepted: false
  },
  {
    studentId: 31,
    name: 'Rahim Ali',
    mobileNumber: '1654321098',
    email: 'rahimali@example.com',
    salaryOffer: '6000',
    dayPerWeek: '4',
    location: 'Pahartoli',
    accepted: false
  },
  {
    studentId: 32,
    name: 'Laila Ahmed',
    mobileNumber: '1543210987',
    email: 'lailaahmed@example.com',
    salaryOffer: '7000',
    dayPerWeek: '5',
    location: 'Khulshi',
    accepted: false
  }
    // Rest of the student data...
  ]);

  const handleAccept = async (studentId) => {
    const acceptedStudent = students.find(student => student.studentId === studentId);
    if (!acceptedStudent) return;

    const updatedStudents = students.map(student => {
      if (student.studentId === studentId) {
        return { ...student, accepted: true };
      }
      return student;
    });
    setStudents(updatedStudents);

    try {
      const response = await fetch('http://localhost/stubd.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(acceptedStudent)
      });
      if (!response.ok) {
        console.error('Failed to accept student information:', response.statusText);
      }
    } catch (error) {
      console.error('Error accepting student information:', error.message);
    }
  };

  return (
    <div className="container">
      <h1></h1>
      <div className="cardContainer">
        {students.map((student, index) => (
          <div key={index} className={`card ${student.accepted ? 'accepted' : ''}`}>
            <p>Name: {student.name}</p>
            <p>Mobile Number: {student.mobileNumber}</p>
            <p>Email: {student.email}</p>
            <p>Salary Offer: {student.salaryOffer}</p>
            <p>Days Per Week: {student.dayPerWeek}</p>
            <p>Location: {student.location}</p>
            <button onClick={() => handleAccept(student.studentId)}>
              {student.accepted ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
      <style jsx>{`
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
          height: 350px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 20px;
          background-color: white;
          font-weight: bold;
        }
        .card.accepted {
          background-color: lightgreen;
        }
      `}</style>
    </div>
  );
};

export default Stubd;
