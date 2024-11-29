// src/SupportModal.js  
import React from 'react';  
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
export default function SupportModal({ darkMode, isOpen, onClose }) {
    const [ticketNumber, setTicketNumber] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Generate a random ticket number
      const generatedTicketNumber = `SUP-${Math.floor(Math.random() * 100000)}`;
      setTicketNumber(generatedTicketNumber);
  
      // Redirect to confirmation page with the ticket number
      navigate(`/support/confirmation?ticket=${generatedTicketNumber}`);
    };
    if (!isOpen) return null;  
    return (  
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
    <form
      onSubmit={handleSubmit}
      className={`p-6 rounded-lg shadow-lg ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
     {/* Close Button */}
     <button   
        onClick={onClose}   
        className="mb-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded"  
        aria-label="Close"  
    >  
     &times; {/* This is the "X" character */}  
    </button>  
      {/* Radio Buttons */}
      <div className="mb-4">
        <p className="mb-2 font-bold">Select an issue:</p>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="issue"
              value="general"
              className={`form-radio ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-400'
              }`}
            />
            <span>General Inquiry</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="issue"
              value="bug"
              className={`form-radio ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-400'
              }`}
            />
            <span>Bug Report</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="issue"
              value="feature"
              className={`form-radio ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-400'
              }`}
            />
            <span>Feature Request</span>
          </label>
        </div>
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block mb-1 font-bold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className={`w-full p-2 rounded ${
            darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-200 text-black border-gray-400'
          }`}
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block mb-1 font-bold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className={`w-full p-2 rounded ${
            darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-200 text-black border-gray-400'
          }`}
        />
      </div>

      {/* Message Textarea */}
      <div className="mb-4">
        <label className="block mb-1 font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Enter your message"
          className={`w-full p-2 rounded ${
            darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-200 text-black border-gray-400'
          }`}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded font-bold ${
          darkMode
            ? 'bg-blue-600 hover:bg-blue-500 text-white'
            : 'bg-blue-400 hover:bg-blue-300 text-black'
        }`}
      >
        Submit Support Ticket
      </button>
    </form>
        </div>  
    );   
};  