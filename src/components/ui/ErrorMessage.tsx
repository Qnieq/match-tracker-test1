import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
        {message}
    </div>
);

export default ErrorMessage;
