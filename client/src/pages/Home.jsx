import Logo from '../assets/logo.png';
import { Button } from '../components/common/Button';

const Home = () => {
    return (
        <div className="h-screen w-screen relative bg-[#0b0b0f] overflow-hidden flex justify-center">

            {/* 🔴 Top Left Glow */}
            <div className="absolute top-[-100px] left-[-100px] h-80 w-80 bg-red-500 opacity-20 blur-3xl rounded-full"></div>

            {/* 🔴 Bottom Right Glow */}
            <div className="absolute bottom-[-100px] right-[-100px] h-80 w-80 bg-red-500 opacity-20 blur-3xl rounded-full"></div>

            {/* 🟣 Center Soft Glow */}
            <div className="absolute h-96 w-96 bg-purple-500 opacity-10 blur-3xl rounded-full"></div>

            {/* 🧊 Main Card */}
            <div className="relative top-40">
                <img src={Logo} alt="Logo" className="mx-auto h-28 w-28 mb-6 rounded-full" />
                <h2 className="text-white text-2xl font-semibold mb-6 text-center">
                    Job Tracking App with MERN Stack and Tailwind CSS
                </h2>
                <p className="text-gray-400 text-lg text-center">
                    Track your jobs efficiently with our intuitive app.
                </p>
                <div className="flex justify-center mt-8">
                    <Button text="Get Started" href="/create" />
                </div>
            </div>
        </div>
    );
};

export default Home;