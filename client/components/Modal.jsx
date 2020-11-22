import React from 'react'

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal__inner">
        <h2 className="modal__title">
          {props.title}
        </h2>
        <p className="modal__description">{props.description}</p>
        {props.children}
      </div>
    </div>
  )
}

export default Modal