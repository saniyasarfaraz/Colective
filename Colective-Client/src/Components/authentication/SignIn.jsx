import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import ForgotPassword from './ForgotPassword';
import SignInLoader from '../../Assets/Loaders/SignInLoader';
import { useAuthContext } from '../../AuthProvider';
import { motion } from 'framer-motion';

const SignIn = () => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showMessage, setShowMessage] = useState(true);
  const [formData, setFormData] = useState({
    email: 'colectiveuser@gmail.com',
    password: 'colective@123'
  });
  const [focusField, setFocusField] = useState('');
  const navigate = useNavigate();
  const { email, password } = formData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocusField(field);
  };

  const handleBlur = () => {
    setFocusField('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/signin`, formData);
      //localStorage.setItem('token', res.data.token);
      login(res.data.token)
      navigate('/dashboard');
      setLoading(false);

    }
    catch (error) {
      setLoading(false);
      //setError('Enter a Registered or Email Address ...')
      setError(error.response.data.error)
      //console.error(error.response.data.error);
    }
  };

  if (loading) {
    return <SignInLoader message={'Signing You In'} />;
  }

  return (
    <main className='h-screen w-screen flex justify-center items-center bg-gray-100'>

      <ForgotPassword isOpen={isModalOpen} onClose={closeModal} />
      <div className='flex flex-col sm:w-[530px] xsmall:w-[355px] w-[330px]'>
        {/* Show Server Message */}
        {showMessage &&
          <div className='fixed bg-white/40 z-[999] flex justify-end pb-[50px] top-0 right-0 w-screen h-screen'>
            <motion.div 
            initial={{ y: 800, opacity: 0,scale:0 }}
            animate={{ y: 0, opacity: 1, scale:1 }}
            transition={{ duration: 0.8 }}

            className='w-[350px] sm:w-[520px] mt-auto mx-auto bg-red-50 border-[2px] px-[15px] py-2 border-red-600 rounded-[15px]'>
              <p onClick={()=>setShowMessage(false)}  className='text-red-50 hover:cursor-pointer bg-red-700 mb-[10px] scale-x-[1.2] text-center rounded-full ml-[300px] sm:ml-[470px] text-[12px] font-[600]'>X</p>
              <p className='text-[14px] font-[600] text-red-700 '>* If you're visiting the site for a quick preview, you may sign in using the pre-filled credentials, bypassing the registration process. 
                {/* <span className='font-bold text-green-600'>free Tier</span>. Your patience will be appriciated as it would not take long. It could maximum take 30 to 60 seconds to keep things go. */}
                </p>
            </motion.div>
          </div>
        } 

        <div className="scale-[1.2] flex mx-auto">
          <img src="/logo.svg" alt="Connection Failed" className="w-[34px] h-[34px]" />
          <div className="text-[#575757] ml-[4px] md:text-[25px] text-[25px] font-[700]"><span className='font-[800] text-red-600'>C</span>olective</div>
        </div>
        <p className='text-[15px] mb-[15px] text-center mt-[8px] text-gray-500 font-[400]'>Simplify Teamwork, Streamline Success</p>

        <div className='py-[35px] w-full px-[25px] flex flex-col bg-white rounded-xl shadow-lg'>
          <form onSubmit={handleSubmit} className='lg:px-[15px]'>

            <div className="relative mt-4 mb-6 flex items-center">
              <div className="bg-gray-400 mr-2 rounded-full flex items-center justify-center w-[40px] h-[40px]">
                <AiOutlineMail className="text-gray-50 text-[22px]" />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className={`absolute left-12 text-gray-900 font-[600] text-[16px] transition-all duration-300 ${focusField === 'email' || email ? '-top-5 text-sm' : 'top-2'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="w-full py-3 bg-transparent text-gray-700 border-b-[2px] border-gray-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="relative mt-4 mb-6 flex items-center">
              <div className="bg-gray-400 mr-2 rounded-full flex items-center justify-center w-[40px] h-[40px]">
                <AiOutlineLock className="text-gray-50 text-[22px]" />
              </div>
              <div className="flex-1">
                <label htmlFor="password" className={`absolute left-12 text-gray-900 font-[600] text-[16px] transition-all duration-300 ${focusField === 'password' || password ? '-top-5 text-sm' : 'top-2'}`}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  
                  value={password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  className="w-full py-3 bg-transparent text-gray-700 border-b-[2px] border-gray-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            {error && <div className='mt-[8px] py-[6px]  rounded-lg'><p className="text-red-600 font-[500] text-[14px]"><span className='font-[700]'>*{" "}</span>{error}, Enter a Registered Email ...</p></div>}

            <button type="submit" className="hover:text-blue-100 hover:bg-blue-950 w-full my-[15px] bg-blue-600 rounded-lg text-white font-[500] py-[12px] transition duration-300">
              Sign In
            </button>
            <p onClick={() => setIsModalOpen(true)} className='text-blue-600 hover:cursor-pointer underline mb-[8px] text-[15px] font-[600]'>Forgot Password</p>
          </form>


          <div className='w-full flex px-[12px] md:px-[19px]  items-center space-x-2'>
            <div className='w-[47%] h-[2px] bg-[#c5c5c5]'></div>
            <p className='text-gray-500 w-[4%] text-[14px]'>OR</p>
            <div className='w-[47%] h-[2px] bg-[#c5c5c5]'></div>
          </div>

          {/*<div className='border-[2px] mt-[15px] py-[12px]  mx-[12px] md:mx-[19px] flex justify-center items-center border-gray-400 rounded-[8px]'>
            <div className='pl-[4px] flex justify-center items-center'>
              <FaGoogle size={24} className='text-blue-500' />
            </div>
            <div className='text-gray-500 text-[13px] sm:text-[16px] ml-[10px]'>Register with Google</div>
          </div>*/}
          <p className='mx-auto mt-[18px] text-gray-500 font-medium'>Dont Have An Account?<span onClick={() => navigate("/register")} className='text-blue-700 hover:cursor-pointer ml-[8px] underline'>Sign Up</span></p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
