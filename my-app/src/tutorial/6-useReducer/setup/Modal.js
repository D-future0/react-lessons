import React, { useEffect } from 'react';

const Modal = ({modal_content, close_modal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      close_modal()
    }, 1000)
  })
  return <div className='model'><p>{modal_content}</p></div>;
};

export default Modal;
