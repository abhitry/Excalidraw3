import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="text-center bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-green-600">Transaction Successful!</h2>
                <p className="text-gray-600 mt-2">Your money has been sent successfully.</p>
                <button 
                    onClick={() => navigate("/dashboard")} 
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};