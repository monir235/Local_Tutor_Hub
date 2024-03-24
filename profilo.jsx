import React, { useState } from 'react';

const Tinfo = ({ cards }) => {
  const handleAccept = async (id) => {
    const card = cards.find(card => card.tutor_id === id);
    if (card) {
      try {
        const response = await fetch('info.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(card)
        });
        if (response.ok) {
          console.log('Card information sent successfully!');
          // You can handle success actions here, such as updating UI
        } else {
          console.error('Failed to send card information:', response.statusText);
          // Handle error responses here
        }
      } catch (error) {
        console.error('Error sending card information:', error.message);
        // Handle network errors here
      }
    }
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <p>Name: {card.name}</p>
          <p>Availability: {card.availability}</p>
          <p>Mobile No: {card.mobile_no}</p>
          <p>Email: {card.e_mail}</p>
          <p>Location: {card.location}</p>
          <p>Institution: {card.institution}</p>
          <p>Current Subject: {card.current_subject}</p>
          <p>Teaching Experience: {card.teaching_experience} years</p>
          <p>{card.additionalInfo}</p>
          <button onClick={() => handleAccept(card.tutor_id)}>Accept</button>
        </div>
      ))}
    </div>
  );
};

export default Tinfo;
