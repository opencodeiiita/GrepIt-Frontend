import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRoom = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    roomNo: '',
    schedule: '',
    numOfQuestions: '',
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
      // Make sure to replace 'REACT_APP_API_URL' with your actual API endpoint
      const apiUrl = process.env.REACT_APP_API_URL;

      // Making the POST request
    //   const response = await axios.post(apiUrl+"/scheduleTime/:time", formData);

    //   if (response) {
    //     setShowSuccess(true);
    //     setTimeout(() => {
    //     setShowSuccess(false);
    //     }, 2000);
    //     console.log("Scheduling success. Show side pop-up.");
    //   } else {
    //     // Redirect to the backend response URL for starting the quiz
    //   }
      setShowSuccess(true);
        setTimeout(() => {
        setShowSuccess(false);
        }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="mx-8 max-w-md bg-white p-8 rounded-md shadow-md mb-8 lg:mx-auto">
      <h2 className="text-2xl font-semibold mb-5">Create Room</h2>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 text-left">Room No</label>
        <input
          name="roomNo"
          placeholder="Enter Room No"
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 text-left">Schedule Quiz</label>
        <input
          name="schedule"
          type="datetime-local"
          className="mt-1 p-2 w-full border rounded-md"
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-600 text-left">No of questions</label>
        <input
          name="numOfQuestions"
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          onChange={handleChange}
        />
      </div>
      <button onClick={() => {navigate('../quiz')}} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-5 w-full block">
        Start Quiz
      </button>
      <button onClick={() => {handleFormSubmit()}} className="bg-green-500 text-white py-2 px-4 rounded-md w-full block">
        Schedule Later
      </button>
      {showSuccess && (
        <div className="bg-green-500 text-white py-2 px-4 rounded-md fixed bottom-8 right-8">
          Success! Link generated.
        </div>
      )}
    </div>
  );
};

export default CreateRoom;