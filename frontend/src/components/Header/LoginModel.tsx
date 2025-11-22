export const LoginModal = ({ setIsModalOpen, isModalOpen }: { setIsModalOpen: (isOpen: boolean) => void, isModalOpen: boolean }) => (
    // Modal Overlay: Fixed, full screen, semi-transparent black background with blur
    <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 ${isModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300`}
        onClick={() => setIsModalOpen(false)}
    >
        {/* Modal Content Box */}
        <div
            className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-sm relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside
        >
            <h3 className="text-3xl font-bold mb-3 text-center text-gray-800">
                Step Into the Future of Health!
            </h3>
            <p className="text-gray-600 mb-8 text-center">
                Sign in to preview features and stay connected as we prepare for full launch.
            </p>

            {/* Login with Google Button */}
            <button
                className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out hover:shadow-lg active:scale-[.98]"
                onClick={() => { console.log('Google Login clicked'); /* Placeholder for actual auth logic */ }}
            >
                {/* Simple inline SVG for Google icon (to avoid external dependencies) */}
                <svg viewBox="0 0 48 48" className="h-5 w-5 mr-3">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.765-6.08 8.307-11.303 8.307-8.841 0-16-7.159-16-16s7.159-16 16-16c3.159 0 6.096 1.199 8.304 3.176l5.95-5.95C34.426 1.83 29.355 0 24 0 10.745 0 0 10.745 0 24s10.745 24 24 24c12.318 0 22.146-8.529 23.64-20.083z"></path>
                    <path fill="#FF3D00" d="M43.611 20.083L42 20H24v8h11.303a12.872 12.872 0 00-1.745 3.394l5.95 5.95c3.085-2.887 5.02-7.147 5.02-11.454 0-1.179-.199-2.314-.492-3.376z"></path>
                    <path fill="#4CAF50" d="M24 48c6.489 0 11.936-2.131 16.326-5.748L34.025 36.88c-1.572 1.41-3.791 2.22-6.025 2.22-4.994 0-9.255-3.359-10.78-7.915l-5.95 5.95c3.483 3.342 8.169 5.378 13.085 5.378z"></path>
                    <path fill="#1976D2" d="M24 0c4.787 0 9.297 1.439 12.628 4.192L31.841 10.04C29.68 8.89 26.969 8 24 8c-4.994 0-9.255 3.359-10.78 7.915l-5.95-5.95C7.818 2.158 15.112 0 24 0z"></path>
                </svg>
                Sign in with Google
            </button>

            {/* Close button */}
            <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsModalOpen(false)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
    </div>
);