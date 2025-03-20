import React from 'react'
import Header from '../comman/Header'
import Footer from '../comman/footer'
import img1 from '../assets/Screenshot 2024-08-13 212023.jpg'
import img2 from '../assets/img4.jpg'
import img3 from '../assets/img2.jpg'
import img4 from '../assets/img5.jpg'

function Team() {
    const img = [
        {
            img: img1,
            name:'John Doe',
            Role:'Software Engineer'
        },
        {
            img: img2,
            name:'Jui Mitchel',
            Role:'UI UX Designer'
        },
        {
            img: img3,
            name:'Robert Joh',
            Role:'Web Developer'
        },
        {
            img: img4,
            name:'Evelyn Tem',
            Role:'Network Engineer'
        }
    ]

    return (
        <>
            <Header />
            <section id="our-team" className="bg-black py-10 px-4">
                <div className="container mx-auto px-4">

                    <div className='w-full flex justify-center items-center' >
                        <h1 className="w-max text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2b68e0] to-[#e710ea]">
                            Meet Our Team
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {
                            img.map((item, index) => {
                                return <div key={index} className="bg-black border-[1px] border-gray-400 rounded-lg shadow-md p-4 my-8 text-center">
                                    <div className="overflow-hidden cursor-pointer rounded-full mb-4 mx-auto w-[250px] h-[250px]">
                                        <img
                                            src={`${item.img}`}
                                            alt="Team Members"
                                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-xl text-white font-semibold mb-2">{item.name}</h3>
                                    <p className="text-gray-500">Role: {item.Role}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className="text-center ">
                        <a href="/" className="bg-indigo-700 transform ease-in-out duration-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-full inline-block  ">More Details</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Team
