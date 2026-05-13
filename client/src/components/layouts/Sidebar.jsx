import Logo from '../../assets/Logo.png'
import { FaCircleChevronRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { HiMiniViewColumns } from "react-icons/hi2";
const Sidebar = ({ open, setOpen }) => {
    return (
        <>
            {
                open && (
                    <div
                        className='fixed inset-0 bg-black/40 z-50 sm:hidden'
                        onClick={() => setOpen(false)}
                    ></div>
                )
            }
            <div className={` h-screen bg-blue-600 z-10 fixed top-0 left-0 z-90
        ${open ? "w-64" : "w-16"}
        sm:${open ? "w-54" : "w-14"}
        md:${open ? "w-64" : "w-16"}
        lg:${open ? "w-72" : "w-24"}

        ${open ? "transform-x-0" : "-transform-x-full"}
        sm:translate-x-0
        transition-all duration-300 ease-in-out`}>
                <div className='absolute -right-2 top-15 z-90'>
                    <FaCircleChevronRight onClick={() => setOpen(!open)} className={`text-xl text-white cursor-pointer transition-transform duration-300  drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] ${open ? "rotate-0" : "rotate-180"
                        }`} />
                </div>
                {/* Logo */}
                <div className='flex justify-center mt-5'>
                    <img src={Logo} className={` rounded-full ${open ? "h-20 w-20" : "h-10 w-10"}`} />
                </div>

                {/* Links */}
                <div className='mt-10 p-2'>
                    <ul className='space-y-2'>
                        <li>
                            <NavLink to="/" className={({ isActive }) => `flex items-center transition-all duration-300 rounded-xl py-2 ${open ? "justify-start px-6 gap-4" : "justify-center"}  ${isActive ? "bg-white/10" : "hover:bg-white/10"} text-white`}>
                                <FaHome className={`text-xl text-white ${open ? "" : ""}`} />
                                <span className={`ml-6 ${open ? 'block' : 'hidden'}`}>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create" className={({ isActive }) => `flex items-center transition-all duration-300 rounded-xl py-2 ${open ? "justify-start px-6 gap-4" : "justify-center"} ${isActive ? "bg-white/10 backdrop-blur-md border-white/20 text-white" : "hover:bg-white/10 backdrop-blur-md border-white/20 text-white"}`}>
                                <IoIosCreate className={`text-xl text-white ${open ? "" : ""}`} />
                                <span className={`ml-6 ${open ? 'block' : 'hidden'}`}>Create</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/view" className={({ isActive }) => `flex items-center transition-all duration-300 rounded-xl py-2 ${open ? "justify-start px-6 gap-4" : "justify-center"} ${isActive ? "bg-white/10" : "hover:bg-white/10"} text-white`}>
                                <HiMiniViewColumns className={`text-xl text-white ${open ? "" : ""}`} />
                                <span className={`ml-6 ${open ? 'block' : 'hidden'}`}>View</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default Sidebar

