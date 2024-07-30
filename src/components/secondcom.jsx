import React, { useEffect, useState } from 'react'
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

  const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    dob: '',
    address: '',
    gender: '',
    hobby: [],
    city: '',
    country: '',
  });

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev, hobby: checked ? [...prev.hobby, value] : prev.hobby.filter((h) => h !== value)
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.firstName !== '' && form.secondName !== '' && form.dob !== '' && form.address !== '' && form.gender !== '' &&
      form.city !== '' && form.country !== '') {
      if (editIndex === -1) {
        const newData = [...data, form];
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));
      } else {
        const updatedData = data.map((item, index) =>
          index === editIndex ? form : item
        );
        setData(updatedData);
        localStorage.setItem('data', JSON.stringify(updatedData));
        setEditIndex(-1);
      }
      setForm({
        firstName: '',
        secondName: '',
        dob: '',
        address: '',
        gender: '',
        hobby: [],
        city: '',
        country: '',
      });
    }
    else {
      alert('Please Enter all Details');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(data[index]);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  };

  return (
    <div>
      <div className='flex flex-row text-left w-full' >
        <div className='w-max' >
          Secound Component
        </div>
        <div className='font-bold text-[20px] text-center p-2 w-[70%]' > Welcome Again {username}</div>
        <div >
          <button className='py-2 px-3 m-1 border rounded-md bg-slate-200' onClick={navi} >Click to Home page</button>
        </div>
      </div>

      <div className='container mx-auto px-4 bg-gray-100' >
        <div className="min-h-screen py-2">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-500">CRUD Operation</h1>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Second Name:</label>
                  <input
                    type="text"
                    name="secondName"
                    value={form.secondName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-lg"
                  />
                </div>
              </div>
              <div className="mb-4 w-full flex gap-5">
                <div className='w-1/2' >
                  <label className="block text-gray-700">Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-lg"
                  />
                </div>
                <div className='w-1/2'>
                  <label className="block text-gray-700">Gender:</label>
                  <div className="flex items-center mt-2">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={form.gender === 'Male'}
                        onChange={handleChange}
                        className="mr-1"
                      />{' '}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={form.gender === 'Female'}
                        onChange={handleChange}
                        className="mr-1"
                      />{' '}
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Address:</label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-lg"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Hobby:</label>
                <div className="flex items-center mt-1">
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      name="hobby"
                      value="Reading"
                      checked={form.hobby.includes('Reading')}
                      onChange={handleChange}
                      className="mr-1"
                    />{' '}
                    Reading
                  </label>
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      name="hobby"
                      value="Traveling"
                      checked={form.hobby.includes('Traveling')}
                      onChange={handleChange}
                      className="mr-1"
                    />{' '}
                    Traveling
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="hobby"
                      value="Cooking"
                      checked={form.hobby.includes('Cooking')}
                      onChange={handleChange}
                      className="mr-1"
                    />{' '}
                    Cooking
                  </label>
                </div>
              </div>
              <div className="mb-4 flex gap-5 w-full">
                <div className='w-1/2' >
                  <label className="block text-gray-700">City:</label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-lg"
                  >
                    <option value="">Select City</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                  </select>
                </div>
                <div className='w-1/2' >
                  <label className="block text-gray-700">Country:</label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-lg"
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                {editIndex === -1 ? 'Add' : 'Update'}
              </button>
            </form>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-2 text-center">Records</h2>
          <div className="w-[100%] overflow-x-scroll mx-auto bg-white p-6 rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Second Name</th>
                  <th className="px-4 py-2 border">DOB</th>
                  <th className="px-4 py-2 border">Address</th>
                  <th className="px-4 py-2 border">Gender</th>
                  <th className="px-4 py-2 border">Hobby</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Country</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border">{item.firstName}</td>
                    <td className="px-4 py-2 border">{item.secondName}</td>
                    <td className="px-4 py-2 border">{item.dob}</td>
                    <td className="px-4 py-2 border">{item.address}</td>
                    <td className="px-4 py-2 border">{item.gender}</td>
                    <td className="px-4 py-2 border">{item.hobby.join(', ')}</td>
                    <td className="px-4 py-2 border">{item.city}</td>
                    <td className="px-4 py-2 border">{item.country}</td>
                    <td className="px-4 py-4 border">
                      <div className='flex' >
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white py-1 px-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Secondcom
