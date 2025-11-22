
export const Navbar = ({ setIsModalOpen }: { setIsModalOpen: (isOpen: boolean) => void }) => {
    
    return (
        <header className="absolute top-0 left-0 right-0 p-4 md:p-8 z-50">
            {/* Inner container to center and limit width of the content */}
            <div className="max-w-400 mx-auto flex justify-between items-center">

                {/* Logo - CareLoop AI */}
                <div className="flex items-center space-x-1">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Care<span className="text-[#F9D000]">Loop</span> AI
                    </h1>
                </div>

                {/* Login Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault(); // Prevents any default button behavior
                        console.log('Login button clicked. Opening modal.');
                        setIsModalOpen(true);
                    }}
                    className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 text-sm tracking-widest uppercase active:scale-[.98]"
                >
                    Login
                </button>
            </div>
        </header>
    )
}


