import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Appbar = ({ label }) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear token
        navigate("/signup"); // Redirect to signup page
    };

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                Paytm App
            </div>
            <div className="flex items-center relative">
                <div className="mr-4">Hello, {label}</div>
                <div 
                    className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center cursor-pointer relative"
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                >
                    <div className="text-xl">U</div>
                    {showMenu && (
                        <div className="absolute right-0 mt-20 w-75 bg-white text-black rounded-lg shadow-lg">
                            <button 
                                className="w-full text-left px-4 py-2 hover:bg-gray-200"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
