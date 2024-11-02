import React from 'react'

const SearchBar = () => {
    return (
        <div className='h-[70px] w-full'>
            <div className="flex items-center justify-start mt-10">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-2 text-gray-500 focus:outline-none"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm5.707-4.707a1 1 0 01-1.414 1.414l-2.732-2.732A5.002 5.002 0 0110 15a5 5 0 115-5c0 1.105-.316 2.137-.854 3.012l2.732 2.732z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SearchBar
