import { BrainCog } from "lucide-react";
import { Navbar } from "../Header/Navbar";
import { useState } from "react";
import { LoginModal } from "../Header/LoginModel";

const BACKGROUND_IMAGE_URL = './heroBackground.png'; // Path to the background image
const RED_CTA_COLOR = '#E74C3C'; 

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div
            className="h-screen w-screen text-gray-900 relative " // Prevents external scrolling
            style={{
                backgroundImage: `url(${BACKGROUND_IMAGE_URL})`, // Set the image background
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >

            {/* Attach the separate, absolutely positioned navigation component */}
            <Navbar setIsModalOpen={setIsModalOpen} />
            <LoginModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
                {/* Panel 1 (Farthest back) - Subtle shadow on the page edge */}
                <div
                    className="absolute top-0 left-0 h-full bg-white/70 shadow-2xl"
                    style={{
                        width: '50vw',
                        maxWidth: '300px',
                        boxShadow: '0 0 50px rgba(0,0,0,0.08) inset, 5px 0 15px rgba(0,0,0,0.1)',
                        zIndex: 10,
                    }}
                />
                <div
                    className="absolute top-0 left-0 h-full bg-white/50"
                    style={{
                        width: '2px',
                        marginLeft: '50px',
                        boxShadow: '1px 0 5px rgba(0,0,0,0.1)',
                        zIndex: 20,
                    }}
                />
            </div>

            <main className="relative z-50 max-w-7xl h-full mx-auto px-8 md:px-12 pt-48 pb-8 md:pt-40 lg:pt-32">
                <div className="flex justify-center lg:pl-30">
                    <div className="w-full lg:w-4/5 xl:w-3/4 ">

                        {/* Pre-header */}
                        <div
                            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-2 lg:px-4 py-1 mb-8 md:mb-2 lg:mb-0 cursor-alias"
                        >
                            <BrainCog className="text-[#F9D000]" />
                            <span className="text-sm rounded-2xl font-bold uppercase tracking-widest">AI-Powered Healthcare Ecosystem</span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold mb-8"  >
                            Care<span className="text-[#F9D000]">Loop</span>: Your
                            <br />
                            AI-Powered Health
                            <br />
                            Companion
                        </h2>

                        {/* Sub-text */}
                        <p className="text-lg md:text-xl font-bold uppercase max-w-lg mb-12 md:mb-8 tracking-wider">
                            One platform connecting local pharmacies, helpers, and users for a healthier community.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <button
                                className="px-8 py-3 rounded-full font-semibold transition duration-300 transform shadow-xl hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 min-w-[180px] text-lg uppercase tracking-wider"
                                style={{
                                    color: 'white',
                                    background: 'linear-gradient(to right, rgba(20, 20, 20, 1) 0%, rgba(70, 70, 70, 1) 100%)',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                Our Features
                            </button>

                            <button
                                className="px-8 py-3 rounded-full font-semibold transition duration-300 transform shadow-xl hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 min-w-[180px] text-lg uppercase tracking-wider"
                                style={{
                                    color: 'white',
                                    background: `linear-gradient(to right, ${RED_CTA_COLOR} 0%, rgba(255, 100, 100, 0.8) 100%)`,
                                    boxShadow: `0 10px 15px -3px rgba(231, 76, 60, 0.4)`,
                                }}
                            >
                                About Us
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HeroSection;