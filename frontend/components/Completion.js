import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf  } from '@fortawesome/free-regular-svg-icons'
import './Completion.css';

const Completion = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Congradulations!</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                    <FontAwesomeIcon icon={faStar} size={"2x"} />
                    <FontAwesomeIcon icon={faStar} size={"2x"} />
                    <FontAwesomeIcon icon={faStar} size={"2x"} />
                    <FontAwesomeIcon icon={faStarHalf} size={"2x"} />
                </div>
                <div className="modal-footer">
                    <button className="btn-continue" onClick={props.close}>CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default Completion;