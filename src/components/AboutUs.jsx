import React from 'react'
import Header from '../comman/Header'
import Footer from '../comman/footer'

function AboutUs() {
    return (
        <main>
            <Header />
            <div className="text-gray-700 bg-white antialiased" >
                <div className="py-20 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(https://media.vanityfair.com/photos/5ce426151c0b0773cacd1121/master/pass/star-wars-feature-vf-2019-summer-embed-05.jpg)' }} >
                    <div className="container m-auto text-center px-6 opacity-100">
                        <h2 className="text-4xl font-bold mb-2 text-white">Innovative Solutions for a Digital World</h2>
                        <h3 className="text-2xl mb-8 text-gray-200">Transforming businesses with cutting-edge technology and expertise</h3>
                        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all" > <a href="#details">Discover Our Services</a></button>
                    </div>
                </div>

                <section className="container mx-auto px-6 p-10" id='#details'>
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Cybersecurity Solutions</h2>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2 pr-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Network Protection</h4>
                            <p className="text-gray-600 mb-8">Our team of experts provides comprehensive network security solutions to protect your business from cyber threats.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg" alt="Network Security" />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <img className="rounded-lg" src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg" alt="Cloud Computing" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-10 order-1 md:order-2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Scalable Infrastructure</h4>
                            <p className="text-gray-600 mb-8">Our cloud computing solutions provide scalable infrastructure to support your business growth and flexibility.</p>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2 pr-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Insightful Decision Making</h4>
                            <p className="text-gray-600 mb-8">Our data analytics solutions help you make informed decisions with actionable insights and data visualization.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img className="rounded-lg" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg" alt="Data Analytics" />
                        </div>
                    </div>
                </section>
                <section className='container mx-auto px-6 p-10' >
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <div className="flex w-full items-center justify-center">
                                <article
                                    className='group relative aspect-video h-96 w-[36rem] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl'
                                >
                                    <img
                                        className='absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300'
                                        src='https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                        alt=''
                                    />
                                    <div
                                        className='absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:transition-all group-hover:duration-500'
                                    >
                                        <h2
                                            className='absolute bottom-8 left-8 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-hover:delay-0 group-hover:duration-300'
                                        >
                                            title
                                        </h2>
                                        <p
                                            className='absolute left-8 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300'
                                        >
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nostrum
                                            nesciunt reiciendis labore vel velit blanditiis vero, amet corporis porro
                                            saepe officiis officia sit sequi molestiae ab libero, quo tempora
                                            repellat? Facilis doloremque, eligendi neque sed fuga tempore hic magnam
                                            qui in sint maiores id, itaque totam, quis quasi! Minima amet excepturi
                                            sit aliquid dolores eos quam asperiores eius consectetur repudiandae
                                            pariatur nostrum laboriosam, non ullam? Exercitationem ipsam illum eos
                                            architecto veniam magnam, officia pariatur sit odit inventore ab natus
                                            culpa cum placeat illo voluptas eum reprehenderit adipisci. Nostrum vel
                                            aperiam dolorem quo exercitationem dicta aut doloremque itaque tempore
                                            similique at accusantium veniam voluptate, commodi quis debitis accusamus,
                                            esse qui saepe adipisci odit corporis? Ad ipsam dolores aspernatur animi
                                            unde voluptas vero recusandae totam alias. Placeat quasi, perferendis ad
                                            cum illo quaerat est cumque maxime incidunt natus corporis debitis et
                                            nesciunt, excepturi ipsam officiis laborum voluptate perspiciatis
                                            blanditiis provident ut aliquid fugit nemo illum. Similique, sequi
                                            doloribus soluta suscipit eligendi quidem laudantium modi incidunt dolore
                                            officia nam blanditiis numquam iusto temporibus odit unde consectetur
                                            voluptatem enim asperiores rerum quam, repellat commodi aliquid impedit!
                                            Voluptatibus, ex asperiores sed, laborum quibusdam quae assumenda vero in
                                            minima qui est numquam modi placeat cum!
                                        </p>
                                        <a className='absolute bottom-8 left-8 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-500 group-hover:duration-300' href='/'>find out more</a >
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Insightful Decision Making</h4>
                            <p className="text-gray-600 mb-8">Our data analytics solutions help you make informed decisions with actionable insights and data visualization.</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}

export default AboutUs
