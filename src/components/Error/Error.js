import React from "react";
import './Error.css';

const Error = () => {
    return (
        <div className="error" data-test-id='error'>
            <span className="error-item">Ошибка получения данных</span>
        </div>
    )
}

export { Error }