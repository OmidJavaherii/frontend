import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'

export default function DeleteModal({ submitAction, cancelAction, title }) {

    useEffect(() => {
        const checkKey = (event) => {
            // console.log(event);
            if (event.keyCode === 27) {
                cancelAction()
            }
            if (event.keyCode === 13) {
                submitAction()
            }
        }
        window.addEventListener('keydown', checkKey)
        return () => window.removeEventListener('keydown', checkKey)
    })

    return ReactDOM.createPortal(
        <div className='modal-parent active'>
            <div className="delete-modal">
                <h1>{title}</h1>
                <div className="delete-modal-btn">
                    <button className='delete-btn delete-modal-accept' onClick={() => submitAction()}>بله</button>
                    <button className='delete-btn delete-modal-reject' onClick={() => cancelAction()}>خیر</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}
