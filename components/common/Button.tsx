import React from "react";

interface C_Button {
    label: string;
    onClick: () => void;
}

export const Button: React.FC<C_Button> = ({ label, onClick }) => {
    <button onClick={onClick} 
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">{label}</button>;
};

export default Button;