import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Userdata } from '../redux/middlewares/auth';
import profileImg from '../assets/images.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        username
    } = useSelector((state) => state.auth);

    const navi = () => {
        navigate('/3')
    }

    const Logout = () => {
        const mail = ''
        dispatch(Userdata(mail))
        localStorage.removeItem('UserDetails')
        navigate('/')
    }
    const navigation2 = () => {
        navigate('/2')
    }


    const onMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div >
            <header className="relative shadow-md py-2">
                <nav className="container mx-auto px-4 flex justify-between">
                    <div className="w-[130px] md:w-[200px] flex items-center">
                        <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[90vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] ${menuOpen ? 'left-[0%]' : 'left-[-100%]'
                                } px-5 md:py-0 py-5 w-[50%] md:w-auto `}
                        >
                            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                                {['Home', 'Faculty', 'Courses', 'About Us', 'Contact Us'].map((link) => (
                                    <li
                                        key={link}
                                        className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 md:text-[12px] lg:text-[22px]"
                                    >
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className='flex gap-2' >
                                <img src={profileImg} alt="" className='rounded-full h-8 w-8 border' />
                                <div className='flex items-center w-full' >
                                    {
                                        username ? username : 'UserName'
                                    }
                                </div>
                            </div>
                            <FontAwesomeIcon
                                icon={menuOpen ? faTimes : faBars}
                                onClick={onMenuToggle}
                                className="text-[30px] cursor-pointer md:hidden w-[40px] border"
                            />
                        </div>
                    </div>
                </nav>
            </header>
            <div className='container mx-auto px-4' >
                Home Page
                <div className="App">
                    <div style={{ border: '1px solid black' }}  >
                        <div className='text-center p-1 text-[40px] font-bold'  > Welcome {username}</div>
                    </div>
                </div>
                <div >
                    <button className='p-5 m-2 border rounded-md bg-slate-300' onClick={navigation2} >Click to go page 2</button>
                    <button className='p-5 m-2 border rounded-md bg-slate-300' onClick={navi} >Click to go page 3</button>
                </div>

                <div >
                    <button style={{ padding: '10px', margin: 10, backgroundColor: 'red', color: 'white', borderRadius: '20px', cursor: 'pointer' }} onClick={Logout} >Log Out</button>
                </div>
            </div>
        </div>
    )
}

export default Home