import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JoinRoom = () => {
 const navigate = useNavigate();
 const [showSuccess, setShowSuccess] = useState(false);
 const [formData, setFormData] = useState({
   roomCode: '',
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData(prevData => ({
     ...prevData,
     [name]: value,
   }));
 };

 const handleFormSubmit = async () => {
   try {
     const apiUrl = process.env.REACT_APP_API_URL;
     const response = await axios.post(apiUrl+"/joinRoom", formData);

     if (response) {
       setShowSuccess(true);
       setTimeout(() => {
         setShowSuccess(false);
       }, 2000);
       console.log("Joined room successfully.");
       navigate('/quizRoom'); // Navigate to QuizRoom component
     } else {
       // Handle failure case
     }
   } catch (error) {
     console.error("Error joining room:", error);
   }
 };

 return (
   <div className="mx-8 max-w-md bg-white p-8 rounded-md shadow-md mb-8 lg:mx-auto">
     <h2 className="text-2xl font-semibold mb-5">Join Room</h2>
     <div className="mb-5">
       <label className="block text-sm font-medium text-gray-600 text-left">Room Code</label>
       <input
         name="roomCode"
         placeholder="Enter Room Code"
         type="text"
         className="mt-1 p-2 w-full border rounded-md"
         onChange={handleChange}
       />
     </div>
     <button onClick={() => {navigate('quizRoom.jsx')}} className="bg-blue-500 text-white py-2 px-4 rounded-md w-full block">
       Join Room
     </button>
     {showSuccess && (
       <div className="bg-green-500 text-white py-2 px-4 rounded-md fixed bottom-8 right-8">
         Successfully joined the room.
       </div>
     )}
   </div>
 );
};

export default JoinRoom;
