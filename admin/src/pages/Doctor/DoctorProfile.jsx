import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);


  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
        about: profileData.about,
      };

      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, {
        headers: { dToken },
      });

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return profileData && (
    <div className='flex flex-col lg:flex-row p-5 bg-gray-100'>
      {/* Left Section: Image Card */}
      <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-center">
            <img
              className="w-20 h-20 rounded-full aspect-square"
              src={profileData.image}
              alt={`${profileData.name}'s profile`}
            />
          </div>
          <p className='text-lg font-medium text-blue-700'>{profileData.name}</p>
          <p className="text-sm text-gray-500 text-center">
            Update your profile information by clicking on the
            <span className='text-blue-600 font-semibold'>edit</span> button to the right of this page. <br />
            Keeping your profile up to date helps patients learn more about you and trust your expertise.
          </p>
        </div>
      </div>

      {/* Center Section: Doctor Info Card */}
      <div className='flex-grow mx-4 mb-6 lg:mb-0'>
        <div className='bg-white shadow-lg rounded-lg p-9'>
          <p className='text-3xl font-medium text-blue-700'>{profileData.name}</p>
          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-md bg-primary text-white'>{profileData.experience}</button>
          </div>

          {/* About Section with Edit Button */}
          <div>
            <p className='flex items-center gap-1 text-sm font-semibold text-neutral-800'>About:</p>
            {isEdit ? (
              <textarea
                className="text-sm text-gray-600 w-full max-w-[700px] mt-1 p-2 border rounded"
                value={profileData.about}
                onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))}
                rows="4"
              />
            ) : (
              <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{profileData.about}</p>
            )}
            <div className="flex justify-center mt-2">
              <button
                onClick={() => {
                  if (isEdit) {
                    updateProfile(); // Save the changes
                  } else {
                    setIsEdit(true); // Enable editing
                  }
                }}
                className='text-blue-600 border items-center justify-center px-5 py-1 border-gray-300 rounded-md font-semibold'
              >
                {isEdit ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Fee, Availability, Address, and Button Card */}
      <div className='w-full sm:w-1/2 lg:w-1/4'>
        <div className='bg-white shadow-lg rounded-lg p-6'>
          <p className='text-blue-600 text-md font-semibold text-center'>Your <span className='text-green-500'>Address</span> and <br /> <span className='text-green-500'>Appointment</span> Fee</p>
          <p className='text-gray-600 font-medium mt-4 text-center'>
            Appointment fee: <span className='text-green-600'>Ksh.</span>
            <span className='text-green-600'>
              {isEdit ? (
                <input
                  type="number"
                  placeholder="Enter fee"
                  onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                  value={profileData.fees}
                  className='border rounded px-2 ml-2'
                />
              ) : (
                profileData.fees
              )}
            </span>
          </p>

          <div className='py-2'>
            <p className='text-sm text-blue-600 font-semibold'>
              <span className='text-black font-semibold text-lg'>Address Line 1:</span>
              <div className='grid grid-cols-2 gap-1'>
                {isEdit ? (
                  <input
                    type="text"
                    placeholder="Line 1"
                    onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                    value={profileData.address.line1}
                    className="border rounded px-2"
                  />
                ) : (
                  <p>{profileData.address.line1}</p>
                )}
              </div>
            </p>

            <p className='text-sm text-blue-600 font-semibold'>
              <span className='text-black font-semibold text-lg'>Address Line 2:</span>
              <div className='grid grid-cols-2 gap-1'>
                {isEdit ? (
                  <input
                    type="text"
                    placeholder="Line 2"
                    onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                    value={profileData.address.line2}
                    className="border rounded px-2"
                  />
                ) : (
                  <p>{profileData.address.line2}</p>
                )}
              </div>
            </p>
          </div>

          {/* Availability Checkbox */}
          <div className='flex gap-1 pt-2 justify-center'>
            <input
              onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
              checked={profileData.available}
              type="checkbox"
            />
            <label className='font-semibold text-teal-400'>Available?</label>
          </div>

          <div className='flex justify-center mt-9'>
            <button
              onClick={isEdit ? updateProfile : () => setIsEdit(true)}
              className='w-20 px-5 py-1 border border-primary text-sm rounded-md hover:bg-primary hover:text-white transition-all duration-500'
            >
              {isEdit ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
