import React from 'react'

function PageNotFound() {
    return (
        <div class="my-8 mx-auto max-w-screen-lg px-4 md:px-8">
            <div class="flex flex-col items-center justify-center sm:items-center md:py-24 lg:py-32 text-center">
                <h1 class="text-4xl font-bold text-pink-600 mb-5">404 - Page Not Found</h1>
                <p class="text-gray-txt mb-5">The page you are looking for might have been removed, had its
                    name changed, or is temporarily unavailable.</p>
                <a href="/" class="bg-pink-600 hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">Main page</a>
            </div>
        </div>
    )
}

export default PageNotFound