import React, { Children } from "react";
import '../App.css';

const Modal = ({children, show, close}) => {
    if (!show) return null

    return(
        <div className="Modal">
            <br></br>
            <div className="modal-content">
                <i className="fa fa-times" onClick={close}/>
                {children}
            </div>
        </div>
    )
}


export default Modal;