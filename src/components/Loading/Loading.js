import React from "react";
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading" data-test-id='loader'>
             <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
       
    )
}

export { Loading }