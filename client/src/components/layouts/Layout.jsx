import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    const [open, setOpen] = useState(true)
    return (
        <div>
            <Header open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />

            <main className={`ml-16 mr-2 md:px-6 lg:px-15 overflow-x-hidden min-h-screen bg-gray-50 transform-all duration-300 ${open ? 'md:ml-64' : 'md:ml-16'}`}>
                <Outlet />
            </main>


        </div>
    )
}

export default Layout