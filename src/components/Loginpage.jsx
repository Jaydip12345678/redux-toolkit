import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Userdata } from '../redux/middlewares/auth'
import { useNavigate } from 'react-router-dom'
import './Loginpage.css'

function Loginpage() {
    const isValidEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        username
    } = useSelector((state) => state.auth);

    useEffect(() => {
        if (username?.length > 5) {
            localStorage.setItem("UserDetails", username);
            navigate('/home')
        }
    }, [username, navigate])


    const submiitt = () => {
        if (mail?.match(isValidEmail) && mail.length > 5 && Password.length > 3 && name.length > 2) {
            setError("")
            dispatch(Userdata(mail))
        }
        else {
            setError("Enter Valid Email or Password")
        }
    }

    return (
        <form className="bg-[#191919] w-[450px] p-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[25px] text-center">
            <h1 className="text-white uppercase font-medium tracking-[5px]">Login</h1>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => (setName(e.target.value) && setError(''))}
                className="border-2 border-[#0097e6] bg-transparent block my-[20px] mx-auto p-[15px] w-[300px] hover:w-[320px] outline-none text-white rounded-[25px] text-center transition-[width] duration-[250ms] ease-[ease] focus:border-[#2ecc71] focus:w-[340px]" />
            <input
                type="email"
                name="email"
                id="username"
                placeholder="Username-email"
                autoComplete="off"
                required
                value={mail}
                onChange={(e) => (setMail(e.target.value) && setError(''))}
                className="border-2 border-[#0097e6] bg-transparent block my-[20px] mx-auto p-[15px] w-[300px] hover:w-[320px] outline-none text-white rounded-[25px] text-center transition-[width] duration-[250ms] ease-[ease] focus:border-[#2ecc71] focus:w-[340px]" />
            <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                autoComplete="off"
                required
                value={Password}
                onChange={(e) => (setPassword(e.target.value) && setError(''))}
                className="border-2 border-[#0097e6] bg-transparent block my-[20px] mx-auto p-[15px] w-[300px] hover:w-[320px] outline-none text-white rounded-[25px] text-center transition-[width] duration-[250ms] ease-[ease] focus:border-[#2ecc71] focus:w-[340px] mb-10" />
            {/* <button
                id="submit"
                onClick={submiitt}
                type="button"
                className="border-2 border-[#2ecc71] bg-transparent block my-[20px] mx-auto text-center p-[15px] w-[200px] outline-none text-white rounded-[25px] cursor-pointer uppercase font-light transition-[background] duration-[250ms] ease-[ease] hover:bg-[#2ecc71] hover:text-black hover:font-semibold delay-100"
            >
                Login
            </button> */}
            <button type='submit' id="submit" onClick={submiitt} className="bn5">Login</button>
            <div className="text-red-500 text-[12px] h-6 pt-8">
                {error}
            </div>
        </form>
    )
}

export default Loginpage
