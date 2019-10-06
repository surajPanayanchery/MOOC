import React from 'react';

export const Notification = ({ message, type, setMessage, setType }) => {

    const clearMessage = () => {
        setMessage(null);
        setType(null);
    }

    return (
        <div>
            {message && <h1 className={type}><div className="header-content">{message}</div> <button className="custom-buttom" onClick={() => {clearMessage()}}>Clear</button></h1>}

        </div>)
}

export default Notification;