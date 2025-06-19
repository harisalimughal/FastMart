import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (userData) => {
    console.log("Registering user with data:", userData);
    
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            return { success: true, data: response.data };
        } else {
            return { success: false, message: "Registration failed." };
        }
    }
    catch (error) {
        console.error("Registration error:", error);
        return { success: false, message: error.response?.data?.message || "An error occurred during registration." };
    }
}