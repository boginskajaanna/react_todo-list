import React from "react";
import { BsCheck } from "react-icons/bs";

const CheckBox = ({ isCompleted }) => {
    return (
        <div className={`border-2 rounded-lg border-pink-500 ${isCompleted ? 'bg-pink-500' : ''} w-6 h-6 flex items-center justify-center`}>
            {isCompleted && <BsCheck size={30}
            className="text-gray-700" />}
        </div>
    )
};

export default CheckBox;
