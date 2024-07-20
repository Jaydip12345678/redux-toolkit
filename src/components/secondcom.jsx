import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Secondcom() {
  const navigate = useNavigate()
  const {
    username
  } = useSelector((state) => state.auth);

  const navi = () => {
    navigate('/')
  }

  return (
    <div>
      Secound Component
      <div className='p-2 font-bold text-[20px] text-center' > Welcome Again {username}</div>

      <div >
        <button className='p-5 m-2 border rounded-md bg-slate-200' onClick={navi} >Click to Home page</button>
      </div>
    </div>
  )
}

export default Secondcom
