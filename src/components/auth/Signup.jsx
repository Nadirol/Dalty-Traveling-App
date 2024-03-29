import { useState } from "react";
import { FiMail } from "react-icons/fi"
import { useNavigate } from "react-router";
import { UserAuth } from "../../context/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const { createUser, emailAndPasswordSignIn } = UserAuth();

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password)
            await emailAndPasswordSignIn(email, password)
            navigate(-1)
        }
        catch(e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <div className="w-auth-form mx-auto">
            <h2 className="text-dark-gray dark:text-semi-light-yellow font-inter font-medium text-2xl md:text-[2rem] leading-none mb-3">
                SIGN UP
            </h2>
            <h1 className="text-very-dark-gray dark:text-regular-yellow font-inter font-semibold text-3xl md:text-[3rem] leading-none mb-2">
                Get Started
            </h1>
            <h3 className="text-dark-gray dark:text-semi-light-yellow font-inter font-normal text-sm md:text-base leading-none">
                Please enter your account details
            </h3>
            <form className="py-6 md:py-8 border-b border-light-gray dark:border-semi-light-yellow relative mb-6 flex flex-col justify-center">
                <div className="bg-light-gray dark:bg-semi-black rounded-[1rem] flex gap-3 items-center px-6 py-3 mb-4 mx-auto w-full">
                    <FiMail className="mt-[2px] md:mt-[3px] dark:text-regular-yellow"/>
                    <input type="email" placeholder="Email" required value={email} onChange={e => handleEmailChange(e)}
                        className="bg-transparent outline-0 w-full	
                        text-very-dark-gray dark:text-regular-yellow font-inter font-normal text-base md:text-xl leading-none
                            placeholder:text-semi-dark-gray placeholder:font-inter placeholder:font-normal 
                                placeholder:text-xs md:placeholder:text-[14px] placeholder:leading-[20px]"/>
                </div>
                <div className="bg-light-gray dark:bg-semi-black rounded-[1rem] flex gap-3 items-center px-6 py-3 mb-4 mx-auto w-full">
                    <FiMail className="mt-[2px] md:mt-[3px] dark:text-regular-yellow"/>
                    <input type="password" placeholder="Password" required value={password} onChange={e => handlePasswordChange(e)}
                        className="bg-transparent outline-0 w-full	
                        text-very-dark-gray dark:text-regular-yellow font-inter font-normal text-base md:text-xl leading-none
                            placeholder:text-semi-dark-gray placeholder:font-inter placeholder:font-normal 
                                placeholder:text-xs md:placeholder:text-[14px] placeholder:leading-[20px]"/>
                </div>
                <input type="submit" value="Continue" onClick={e => handleSubmit(e)}
                    className="bg-orange w-full mx-auto text-white dark:text-extra-dark-gray font-inter font-semibold text-xl
                        hover:bg-dark-orange cursor-pointer rounded-[1rem] p-2"/>
                <h1 className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 
                    bg-light-yellow dark:bg-extra-dark-gray px-4 text-dark-gray dark:text-semi-light-yellow 
                        font-inter font-normal text-xs md:text-sm leading-none w-max">
                    OR SIGN UP WITH
                </h1>
            </form>
            <button className="border-2 border-light-gray dark:border-semi-light-yellow rounded-[1rem] w-[80%] md:w-3/4 mb-4 mx-auto
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

export default Signup;
