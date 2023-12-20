import React from 'react'
import starIcon from '../../assets/images/Star.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//  import {doctors} from './../../assts/data/doctors';

const DoctorCard = ({ doctor }) => {
    const navigate = useNavigate();
     
    function clickHandler(){
        navigate('/bookAppointment');
    }


    const {name, avgRating, totalRating, photo, specialization, totalPatients, hospital} = doctor;
    return (
        <div className='p-3 lg:p-5 '>
            <div>
                <img src={photo} className='w-full' alt="" />
            </div>

            <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 '>
                {name}
            </h2>

            <div className='mt-2 lg:mt-4 flex items-center justify-between '>
                <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7  font-semibold rounded '> {specialization} 
                </span>
                <div className='flex items-center gap-[6px]'>
                  <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-16px leading-7 font-semibold text-headingColor" >
                    <img src={starIcon} alt=""  />
                    {avgRating}
                  </span>
                  <span className='text-[14px] leading-6 lg:text-16px leading-7 font-[400] text-headingColor '>({totalRating})
                  </span>
                </div>
            </div>

            <div className="mt-[18px] lg:mt-5 flex items-center justify-between ">
                <div>
                    <h3 className='text-[16px] leading-7 lg:text-18px lg:leading-[30px] font-semibold text-headingColor  '> 
                        +{totalPatients} patients
                    </h3>
                    <p className='text-[14px] leading-6 font-[400] text-textColor'>At {hospital}</p>
                </div>

            
                <button onClick={clickHandler} className='p-2 m-2 bg-slate-500 text-white rounded-md border'>BookAppointment</button>
           

            </div>

        </div>
    )
 }

 export default DoctorCard;