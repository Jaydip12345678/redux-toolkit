import React, { useEffect, useState } from 'react'
import '../components/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { Userdata } from '../redux/middlewares/auth'
import { useNavigate } from 'react-router-dom'

function Loginpage() {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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
            navigate('/1')
        }
    }, [username])


    const submiitt = () => {
        if (mail?.match(isValidEmail) && mail.length > 5 && Password.length > 3) {
            setError("")
            dispatch(Userdata(mail))
        }
        else {
            setError("Enter Valid Email or Password")
        }
    }

    return (
        <form className="box">
            <h1>login</h1>
            <input type="email" name="email" id="username" placeholder="Username" autoComplete="off" required value={mail} onChange={(e) => (setMail(e.target.value), setError(''))} />
            <input type="password" name="pass" id="pass" placeholder="Password" autoComplete="off" required value={Password} onChange={(e) => (setPassword(e.target.value), setError(''))} />
            <button id="submit" onClick={submiitt} type='button' >
                Login
            </button>
            <div style={{ color: 'red', fontSize: '10px' }} >
                {error}
            </div>
        </form>
    )
}

export default Loginpage
