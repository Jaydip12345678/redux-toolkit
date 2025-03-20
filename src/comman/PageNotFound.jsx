import React from 'react'

function PageNotFound() {
    return (
        <div className="my-8 mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="flex flex-col items-center justify-center sm:items-center md:py-24 lg:py-32 text-center">
                <h1 className="text-4xl font-bold text-pink-600 mb-5">404 - Page Not Found</h1>
                <p className="text-gray-txt mb-5">The Page Unavailable.</p>
                <a href="/" className="bg-pink-600 hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">Main page</a>
            </div>
        </div>
    )
}

export default PageNotFound