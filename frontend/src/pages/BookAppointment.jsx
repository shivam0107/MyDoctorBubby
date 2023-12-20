// BookingForm.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    appointmentDate: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function toastHandler() {
    toast("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your booking form submission logic here
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      patientName: "",
      patientAddress: "",
      appointmentDate: "",
      reason: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Patient Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="patientName"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Patient Name
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="Enter patient's name"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div class="bg-white p-8 rounded shadow-md">
            <label for="gender" class="text-lg font-semibold mb-2 block">
              Select Gender:
            </label>
            <select
              id="gender"
              name="gender"
              class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="patientAddress"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Patient Address
          </label>
          <input
            type="text"
            id="patientAddress"
            name="patientAddress"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="Enter your Address"
            value={formData.patientAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div class="bg-white p-8 rounded shadow-md">
            <label for="age" class="text-lg font-semibold mb-2 block">
              Select Age:
            </label>
            <select
              id="age"
              name="age"
              class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            >
              <option value="0-10">0-10</option>
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value="41-50">41-50</option>
              <option value="51-60">51-60</option>
              <option value="61-70">61-70</option>
              <option value="71-80">71-80</option>
              <option value="81-90">81-90</option>
              <option value="91+">91+</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="appointmentDate"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Appointment Date
          </label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="reason"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Reason for Appointment
          </label>
          <textarea
            id="reason"
            name="reason"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            placeholder="Briefly describe the reason for the appointment"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={ toastHandler }
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-400"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
