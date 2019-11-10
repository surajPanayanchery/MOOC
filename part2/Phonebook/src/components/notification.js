import React from 'react';

export const Notification = ({ message, type, setMessage, setType }) => {

    const clearMessage = () => {
        setMessage(null);
        setType(null);
    }

    return (
        <div class="notification">
            {message && <h5 className={type}><div className="header-content">{message}</div> <button className="custom-buttom" onClick={() => {clearMessage()}}>Clear</button></h5>}

        </div>)
}

export default Notification;