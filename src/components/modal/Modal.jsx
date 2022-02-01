import React, { useEffect, useState,useRef } from 'react';
import {FaTimes} from 'react-icons/fa';
import './modal.scss';

function Modal(props) {
    const [active, setActive] = useState(false);

    useEffect(()=>{
        setActive(props.active)
    },[props.active])
  return (
      <div id={props.id} className={`myModal ${active ? 'active' : ''}`}>
          {props.children}
      </div>
  );
}
export const ModalContent=(props)=>{
    const contentRef=useRef(null);

    const CloseModal=()=>{
        contentRef.current.parentNode.classList.remove("active");    
        props.onClose()
    }
    return (
        <div ref={contentRef} className='modal-content'>
            {props.children}
            <div className="modal-content-close" onClick={CloseModal}>
                <FaTimes/>
            </div>
        </div>
    )
}

export default Modal;
  