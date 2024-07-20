import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../redux/middlewares/auth'

function Third() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [popup, setPopup] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    loginLoading,
    loginSucces
  } = useSelector((state) => state.auth);


  useEffect(() => {
    dispatch(LoginUser())
  }, [dispatch])

  const navi = () => {
    navigate('/')
  }

  const openPopup = (user) => {
    console.log(user);
    setSelectedUser(user);
    setPopup(true)
  }

  return (
    <div style={{ position: 'relative' }} >
      This is third component's
      <div >
        <button className='p-5 m-2 border rounded-md bg-slate-200' onClick={navi} >Click to Home page</button>
      </div>
      <div>
        <div className='font-bold px-10 py-2' >User Data</div>
        {
          loginLoading
            ?
            <div> Loding... </div>
            :
            loginSucces.users?.map((item, index) => {
              return <div key={index} style={{ display: 'flex' }} >
                <div className='pr-2' >name :</div> <div style={{ cursor: 'pointer' }} onClick={() => openPopup(item)} >{item.firstName}</div>
              </div>
            })
        }
      </div>
      {
        popup &&
        <div style={{ position: 'absolute', top: '0px', right: '0px', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <div style={{ padding: '10px', margin: '50px', border: '2px solid black', backgroundColor: 'gray', color: 'black' }} >
            THis is User Details
            <div >
              <p>Name: {selectedUser.firstName} {selectedUser.lastName}</p>
              <p>Date of Birth: {selectedUser.birthDate}</p>
              <p>Age: {selectedUser.age}</p>
            </div>
            <span onClick={() => setPopup(false)} style={{ position: 'absolute', top: '40%', right: '40%', cursor: 'pointer' }} >X</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Third
