import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../assets/images.jfif';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Userdata } from '../redux/middlewares/auth';

function Header() {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { username } = useSelector((state) => state.auth);

    const onMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const navigateurl = (link) => {
        navigate(`/${link}`);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        const dropdown = document.getElementById('dropdown');
        const handleClickOutside = (event) => {
            if (dropdown && !dropdown.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdown]);

    const Logout = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            const mail = '';
            dispatch(Userdata(mail));
            localStorage.removeItem('UserDetails');
            navigate('/');
        }
    };

    return (
        <>
            <header className="sticky top-0 left-0 shadow-md py-2 bg-black border-b border-white z-50">
                <nav className="container mx-auto px-4 flex justify-between">
                    <div
                        className="w-[130px] md:w-[200px] flex items-center cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
                        {/* <img src={Logo} alt="LOGO" className='h-[100px]' /> */}
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className={`navLinks duration-500 absolute md:static md:w-auto w-[40%] md:h-auto h-[90vh] bg-black flex md:items-center gap-[1.5vw] top-[100%] ${menuOpen ? 'left-[0%]' : 'left-[-100%]'
                                } px-5 md:py-0 py-5 w-[50%] md:w-auto `}
                        >
                            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                                {['home', 'courses', 'about', 'team', 'contact'].map((link, index) => (
                                    <li
                                        key={index}
                                        className={`relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r after:rounded-3xl from-[#2b68e0] to-[#e710ea] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 md:text-[12px] lg:text-[22px] cursor-pointer
                                            ${location.pathname === `/${link}` ? 'after:w-full' : ''}`}
                                    >
                                        <div onClick={() => navigateurl(link)} className='text-white capitalize'>
                                            {link}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                onClick={() => setDropdown(true)}
                                className='flex gap-2 cursor-pointer relative'
                            >
                                <img src={profileImg} alt="" className='rounded-full h-8 w-8 border' />
                                <div className='flex items-center w-full text-white'>
                                    {username ? username : 'UserName'}
                                </div>
                                {dropdown && (
                                    <div
                                        id="dropdown"
                                        className="absolute top-[120%] left-[-10px] rounded-bl-3xl rounded-br-3xl shadow-xl p-2 w-[150px] border border-t-0 bg-gray-800 border-white"
                                    >
                                        <ul className='text-center'>
                                            <li className="py-1 text-white hover:bg-white hover:text-black cursor-pointer rounded-lg">Profile</li>
                                            <li className="py-1 text-white hover:bg-red-600 rounded-lg cursor-pointer" onClick={Logout}>Log Out</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <FontAwesomeIcon
                                icon={menuOpen ? faTimes : faBars}
                                onClick={onMenuToggle}
                                className="text-[30px] cursor-pointer md:hidden w-[40px] border text-white"
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;





// import React, { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import profileImg from '../assets/images.jfif'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Userdata } from '../redux/middlewares/auth';
// import Logo from '../assets/MyLogo.png'

// function Header() {
//     const navigate = useNavigate()
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [dropdown, setDropdown] = useState(false);
//     const { username } = useSelector((state) => state.auth);
//     const onMenuToggle = () => { setMenuOpen(!menuOpen); };
//     const navigateurl = (link) => {
//         navigate(`/${link}`)
//     }
//     const dispatch = useDispatch()


//     useEffect(() => {
//         const dropdown = document.getElementById('dropdown');
//         const handleClickOutside = (event) => {
//             if (dropdown && !dropdown.contains(event.target)) {
//                 setDropdown(false);
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdown]);


//     const Logout = () => {
//         if (window.confirm("Are you sure you want to log out?")) {
//             const mail = ''
//             dispatch(Userdata(mail))
//             localStorage.removeItem('UserDetails')
//             navigate('/')
//         }
//     }

//     return (
//         <>
//             <header className="sticky top-0 left-0 shadow-md py-2 bg-black border-b border-white z-50">
//                 <nav className="container mx-auto px-4 flex justify-between">
//                     <div className="w-[130px] md:w-[200px] flex items-center cursor-pointer" onClick={() => navigate('/')}>
//                         <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
//                         {/* <img src={Logo} alt="LOGO" className='h-[100px]' /> */}
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <div
//                             className={`navLinks duration-500 absolute md:static md:w-auto  w-[40%] md:h-auto h-[90vh] bg-black flex md:items-center gap-[1.5vw] top-[100%] ${menuOpen ? 'left-[0%]' : 'left-[-100%]'
//                                 } px-5 md:py-0 py-5 w-[50%] md:w-auto `}
//                         >
//                             <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
//                                 {['home', 'courses', 'about', 'team', 'contact'].map((link, index) => (
//                                     <li
//                                         key={index}
//                                         className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r after:rounded-3xl from-[#2b68e0] to-[#e710ea] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 md:text-[12px] lg:text-[22px] cursor-pointer"
//                                     >
//                                         <div onClick={() => navigateurl(link)} className='text-white capitalize' >{link}</div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <div
//                                 onClick={() => setDropdown(true)}
//                                 className='flex gap-2 cursor-pointer relative'
//                             >
//                                 <img src={profileImg} alt="" className='rounded-full h-8 w-8 border' />
//                                 <div className='flex items-center w-full text-white' >
//                                     {
//                                         username ? username : 'UserName'
//                                     }
//                                 </div>
//                                 {dropdown && (
//                                     <div id="dropdown" className="absolute top-[120%] left-[-10px] rounded-bl-3xl rounded-br-3xl shadow-xl p-2 w-[150px] border border-t-0 bg-gray-800 border-white">
//                                         <ul className='text-center' >
//                                             <li className="py-1 text-white hover:bg-white hover:text-black  cursor-pointer rounded-lg">Profile</li>
//                                             <li className="py-1 text-white hover:bg-red-600 rounded-lg cursor-pointer" onClick={Logout} >Log Out</li>
//                                         </ul>
//                                     </div>
//                                 )}
//                             </div>
//                             <FontAwesomeIcon
//                                 icon={menuOpen ? faTimes : faBars}
//                                 onClick={onMenuToggle}
//                                 className="text-[30px] cursor-pointer md:hidden w-[40px] border text-white "
//                             />
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     )
// }

// export default Header