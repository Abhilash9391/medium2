import { SignupType } from "@abhilash123/common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = () => {
    const [postInputs, setPostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    async function sendrequest(event: React.FormEvent) {
        event.preventDefault();  // Prevent default form submission
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blog/s");
        } catch (error) {
            alert("Invalid credentials");
        }
    }

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPostInputs((prevState: any) => ({
            ...prevState,
            [name]: value.trim()
        }));
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
        }}>
            <form
                onSubmit={sendrequest}  // Use onSubmit for form submission
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    backgroundColor: '#fff',
                    padding: '3rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    width: '350px'
                }}
            >
                <h2 style={{
                    textAlign: 'center',
                    margin: '0',
                    fontSize: '1.5rem',
                    color: '#333',
                    fontWeight: '600'
                }}>Welcome Back</h2>
                <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>Please Signup</p>

                <input
                    type="text"
                    name="name"
                    placeholder="Username"
                    onChange={handleInputChange}
                    style={{
                        padding: '0.75rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border 0.3s',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.border = '1px solid #6a11cb'}
                    onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    style={{
                        padding: '0.75rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border 0.3s',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.border = '1px solid #6a11cb'}
                    onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    style={{
                        padding: '0.75rem',
                        fontSize: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border 0.3s',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                    onFocus={(e) => e.target.style.border = '1px solid #6a11cb'}
                    onBlur={(e) => e.target.style.border = '1px solid #ddd'}
                />
                <button
                    type="submit"
                    style={{
                        padding: '0.75rem',
                        fontSize: '1rem',
                        color: '#fff',
                        backgroundColor: '#6a11cb',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        width: '100%'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2575fc'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6a11cb'}
                >
                    Signup
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
                    Already have an account? <Link to={"/signin"}>Login</Link>
                </p>
            </form>
        </div>
    );
};
