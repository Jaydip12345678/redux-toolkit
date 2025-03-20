import React from 'react'
import Header from '../comman/Header'
import Footer from '../comman/footer'
import { MdHomeRepairService } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

function ContactUs() {
    return (
        <main>
            <Header />
            <div className="min-h-screen flex justify-center items-center bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}>
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80"></div>
                <section className="relative z-10 pt-12 pb-12">
                    <div className="max-w-4xl mx-auto px-5">
                        <div className="text-center mb-12">
                            <h2 className="text-white font-bold text-4xl mb-5">Contact Us</h2>
                            <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                                <div className="mb-8 flex">
                                    <div className="bg-white h-16 w-16 flex items-center justify-center rounded-full">
                                        <MdHomeRepairService size={35} color='rgb(8 145 178)' />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-cyan-600 text-xl font-semibold mb-1">Address</h4>
                                        <p className="text-white">465 Sugar Camp Road, Owatonna, Minnesota</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex">
                                    <div className="bg-white h-16 w-16 flex items-center justify-center rounded-full">
                                        <FaPhoneVolume size={30} color='rgb(8 145 178)' />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-cyan-600 text-xl font-semibold mb-1">Phone</h4>
                                        <p className="text-white">571-457-2321</p>
                                    </div>
                                </div>
                                <div className="mb-8 flex">
                                    <div className="bg-white h-16 w-16 flex items-center justify-center rounded-full">
                                        <MdAlternateEmail size={35} color='rgb(8 145 178)' />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-cyan-600 text-xl font-semibold mb-1">Email</h4>
                                        <p className="text-white">ntamerrwael@mfano.ga</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 bg-white p-10">
                                <form id="contact-form">
                                    <h2 className="text-2xl font-bold mb-5 text-gray-800">Send Message</h2>
                                    <div className="relative w-full mb-10">
                                        <input type="text" required className="w-full border-b-2 border-gray-800 outline-none py-2 px-1 mb-1" />
                                        <span className="absolute left-0 transform -translate-y-1/2 text-gray-600 transition-all">Full Name</span>
                                    </div>
                                    <div className="relative w-full mb-10">
                                        <input type="email" required className="w-full border-b-2 border-gray-800 outline-none py-2 px-1 mb-1" />
                                        <span className="absolute left-0 transform -translate-y-1/2 text-gray-600 transition-all">Email</span>
                                    </div>
                                    <div className="relative w-full mb-10">
                                        <textarea required className="w-full border-b-2 border-gray-800 outline-none py-2 px-1 mb-1 resize-none"></textarea>
                                        <span className="absolute left-0 transform -translate-y-1/2 text-gray-600 transition-all">Type your Message...</span>
                                    </div>
                                    <div>
                                        <input type="submit" value="Send" className="w-full bg-cyan-600 text-white py-3 cursor-pointer hover:bg-white hover:text-cyan-600 transition-all border border-cyan-600" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default ContactUs
