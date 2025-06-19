// components/user_auth/authUtils.js

// Validates a standard email format
export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Checks if both password fields match
export const passwordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
};

// Checks password length and optionally strength
export const validatePassword = (password) => {
    return password.length >= 6;
};

// Checks if any field is empty
export const isFieldEmpty = (...fields) => {
    return fields.some((field) => field.trim() === "");
};

// Combined validation for register form
export const checkValidationsRegister = ({ firstName, lastName, email, password, confirmPassword }) => {
    if (isFieldEmpty(firstName, lastName, email, password, confirmPassword)) {
        return { valid: false, message: "All fields are required." };
    }

    if (!validateEmail(email)) {
        return { valid: false, message: "Please enter a valid email address." };
    }

    if (!validatePassword(password)) {
        return { valid: false, message: "Password should be at least 6 characters long." };
    }

    if (!passwordsMatch(password, confirmPassword)) {
        return { valid: false, message: "Passwords do not match." };
    }

    return { valid: true };
};
