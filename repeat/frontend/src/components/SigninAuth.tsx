import { SigninType } from "@abhilash123/common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const SigninAuth = () => {
    const [signInput, setSigninInputs] = useState<SigninType>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    async function sendrequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, signInput);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blog/:id");
        } catch (error) {
            alert("Invalid credentials");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-600 to-blue-500">
            <form
                className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg w-96"
                onSubmit={(e) => {
                    e.preventDefault();
                    sendrequest();
                }}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
                <p className="text-sm text-gray-600 text-center">
                    Please login to your account
                </p>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => {
                        setSigninInputs({
                            ...signInput,
                            email: e.target.value,
                        });
                    }}
                    className="p-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                        setSigninInputs({
                            ...signInput,
                            password: e.target.value,
                        });
                    }}
                    className="p-3 border border-gray-300 rounded-lg outline-none focus:border-purple-500 transition-all"
                />

                <button
                    type="submit"
                    className="py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all"
                >
                    Login
                </button>

                <p className="text-sm text-gray-600 text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-purple-600 hover:underline">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    );
};
