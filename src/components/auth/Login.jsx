import { FiMail } from "react-icons/fi"
import { AiOutlineLock } from "react-icons/ai"

import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Login = ({ emailValue, handleEmailChange, passwordValue, handlePasswordChange }) => {
    const { googleSignIn, emailAndPasswordSignIn } = UserAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/')
        }
        catch(error) {
            console.log(error)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await emailAndPasswordSignIn(emailValue, passwordValue)
          navigate('/')
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      };

    return (
        <div className="w-auth-form mx-auto">
            <h2 className="text-dark-gray dark:text-semi-light-yellow font-inter font-medium text-2xl md:text-[2rem] leading-none mb-3">
                LOGIN
            </h2>
            <h1 className="text-very-dark-gray dark:text-regular-yellow font-inter font-semibold text-3xl md:text-[3rem] leading-none mb-2">
                Welcome Back
            </h1>
            <h3 className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-sm md:text-base leading-none">
                Please enter your account details
            </h3>
            <form className="py-6 md:py-8 border-b border-light-gray dark:border-semi-light-yellow relative mb-6 flex flex-col justify-center">
                <div className="bg-light-gray dark:bg-semi-black rounded-[1rem] flex gap-3 items-center px-6 py-3 mb-4 mx-auto w-full">
                    <FiMail className="mt-[2px] md:mt-[3px] dark:text-regular-yellow"/>
                    <input type="email" placeholder="Email" required value={emailValue} onChange={e => handleEmailChange(e)}
                        className="bg-transparent outline-0 w-full focus:bg-transparent
                        text-very-dark-gray dark:text-regular-yellow font-inter font-normal text-base md:text-xl leading-none
                            placeholder:text-semi-dark-gray placeholder:font-inter placeholder:font-normal 
                                placeholder:text-xs md:placeholder:text-[14px] placeholder:leading-[20px]"/>
                </div>
                <div className="bg-light-gray dark:bg-semi-black rounded-[1rem] flex gap-3 items-center px-6 py-3 mb-4 mx-auto w-full">
                    <AiOutlineLock className="mt-[2px] md:mt-[3px] dark:text-regular-yellow"/>
                    <input type="password" placeholder="Password" required value={passwordValue} onChange={e => handlePasswordChange(e)}
                        className="bg-transparent outline-0 w-full	
                        text-very-dark-gray dark:text-regular-yellow font-inter font-normal text-base md:text-xl leading-none
                            placeholder:text-semi-dark-gray placeholder:font-inter placeholder:font-normal 
                                placeholder:text-xs md:placeholder:text-[14px] placeholder:leading-[20px]"/>
                </div>
                <input type="submit" value="Continue" onClick={e => handleSubmit(e)}
                    className="bg-orange w-full mx-auto text-white dark:text-extra-dark-gray font-inter font-semibold text-xl
                        hover:bg-dark-orange cursor-pointer rounded-[1rem] p-2"/>
                <h1 className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 
                    bg-light-yellow dark:bg-extra-dark-gray px-4 text-dark-gray dark:text-semi-light-yellow font-inter
                        font-normal text-xs md:text-sm leading-none w-max">
                    OR LOGIN WITH
                </h1>
            </form>
            <button onClick={handleGoogleSignIn}
                className="border-2 border-light-gray dark:border-semi-light-yellow rounded-[1rem] w-[80%] md:w-3/4 mb-4 mx-auto
                flex gap-4 items-center justify-center py-2 text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-base md:text-lg">
                <img src={"/images/google icon.png"} alt="" 
                    className="object-contain max-w-[1.5rem]"/>
                Google Account
            </button> 
            <button className="border-2 border-light-gray dark:border-semi-light-yellow rounded-[1rem] w-[80%] md:w-3/4 mx-auto
                flex items-center justify-center py-2 text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-xs md:text-base">
                Quick Sign Up and Login
            </button>
        </div>
    )
}

export default Login;
