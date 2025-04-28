import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import EmailVerification from './Registration/EmailVerification';
import PasswordInput from './Registration/PasswordInput';
import UserDetails from './Registration/UserDetails';

import { BiCheckCircle, BiCircle } from 'react-icons/bi';
  

const StepProgress = ({ step }) => {
  return (
    <div className="flex items-center mx-auto mt-[15px]">
      <div className={`flex flex-col items-center`}>
        <div className={`rounded-full h-10 w-10 flex items-center justify-center 
          ${step >= 1 ? 'bg-green-500' : 'bg-gray-400'}`}>
          {step >= 1 ? <BiCheckCircle className="text-white text-2xl" /> : <BiCircle className="text-white text-2xl" />}
        </div>
        <span className="text-[11px] text-center font-[600] mt-2 text-gray-500">Email Authentication</span>
      </div>

      {/* Line between steps */}
      <div className={`h-1 w-[88px] md:w-[105px] mx-2 ${step > 1 ? 'bg-green-500' : 'bg-gray-400'}`} />

      {/* Second Step */}
      <div className={`flex flex-col items-center`}>
        <div className={`rounded-full h-10 w-10 flex items-center justify-center 
          ${step >= 2 ? 'bg-green-500' : 'bg-gray-400'}`}>
          {step >= 2 ? <BiCheckCircle className="text-white text-2xl" /> : <BiCircle className="text-white text-2xl" />}
        </div>
        <span className="text-[11px] mt-2 text-center text-gray-500">Password Setup</span>
      </div>

      {/* Line between steps */}
      <div className={`h-1 w-[88px] md:w-[105px] mx-2 ${step > 2 ? 'bg-green-500' : 'bg-gray-400'}`} />

      {/* Third Step */}
      <div className={`flex flex-col items-center`}>
        <div className={`rounded-full h-10 w-10 flex items-center justify-center 
          ${step >= 3 ? 'bg-green-500' : 'bg-gray-400'}`}>
          {step >= 3 ? <BiCheckCircle className="text-white text-2xl" /> : <BiCircle className="text-white text-2xl" />}
        </div>
        <span className="text-[11px] text-center mt-2 text-gray-500">Account Creation</span>
      </div>
    </div>
  );
};



const SignUp = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');  
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSuccess = ({ name, email }) => { 
    setEmail(email);
    setName(name);
    setStep(2);
  };

  const handlePasswordNext = (password) => {
    setPassword(password);
    setStep(3);
  };

  const handleUserDetailsSubmit = async (data) => {
    try {
      //console.log(data);
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/signup`, {
        ...data,
        email,
        name,
        password
      });
      localStorage.setItem('token', res.data.token);
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data?.error || 'Error during sign up');
    }
  };
  return (
    <main className='h-screen w-screen flex justify-center items-center bg-gray-100'>
      <div className='flex flex-col sm:w-[530px] xsmall:w-[355px] w-[330px]'>
        <div className="scale-[1.2] flex mx-auto">
          <img src="/logo.svg" alt="Connection Failed" className="w-[34px] h-[34px]" />
          <div className="text-[#575757] ml-[4px] md:text-[25px] text-[25px] font-[700]"><span className='font-[800] text-red-600'>C</span>olective</div>
        </div>
        <p className='text-[15px] mb-[15px] text-center mt-[8px] text-gray-500 font-[400]'>Simplify Teamwork, Streamline Success</p>

        <div className='py-[18px] px-[25px] flex flex-col bg-white rounded-xl shadow-lg'>
         
          <div className='ml-[-8px] md:ml-0 md:scale-[1] scale-[0.6] xsmall:scale-[0.8] '>
          <StepProgress step={step} />
          </div>
          {step === 1 && <EmailVerification onSuccess={handleEmailSuccess} />}
          {step === 2 && <PasswordInput onNext={handlePasswordNext} />}
          {step === 3 && <UserDetails userEmail={email} onSubmit={handleUserDetailsSubmit} />}

          <div className='w-full flex px-[12px] md:px-[19px]  items-center space-x-2'>
            <div className='w-[47%] h-[2px] bg-[#c5c5c5]'></div>
            <p className='text-gray-500 w-[4%] text-[14px]'>OR</p>
            <div className='w-[47%] h-[2px] bg-[#c5c5c5]'></div>
          </div>

          {/* <div className='border-[2px] mt-[15px] py-[12px]  mx-[12px] md:mx-[19px] flex justify-center items-center border-gray-400 rounded-[8px]'>
            <div className='pl-[4px] flex justify-center items-center'>
              <FaGoogle size={24} className='text-blue-500' />
            </div>
            <div className='text-gray-500 text-[13px] sm:text-[16px] ml-[10px]'>SignUp with Google</div>
          </div>
          */}
          <p className='mx-auto mt-[18px] text-gray-500 font-medium'>Already Have An Account?<span onClick={() => navigate("/login")} className='text-blue-700 hover:cursor-pointer ml-[8px] underline'>Sign In</span></p>

        </div>
      </div>
    </main>
  );
};

export default SignUp;
