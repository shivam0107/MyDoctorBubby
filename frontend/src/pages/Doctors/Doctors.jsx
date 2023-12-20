import React from 'react'
import DoctorCard from './../../components/Doctors/DoctorCard';
import {doctors} from './../../assets/data/doctors';
const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ae]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>

          <div className="flex justify-center">
            <div class="bg-white mt-2 w-[570px] p-8 rounded-md shadow-md">
              <label
                for="department"
                class="text-lg font-semibold mb-2 block text-gray-800"
              >
                Select Department:
              </label>
              <select
                id="department"
                name="department"
                class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 bg-white text-gray-800"
              >
                <option value="cardiology">Cardiology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="neurology">Neurology</option>
                <option value="oncology">Oncology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="Dentle">Dentle</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Neurology">Neurology</option>
                <option value="Physical therapy">Physical therapy</option>
                <option value="Councelling">Councelling</option>
                <option value="ENT">ENT</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
    
  
}

export default Doctors;