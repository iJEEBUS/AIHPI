import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf  } from '@fortawesome/free-regular-svg-icons'
import './Completion.css';

class Completion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Congradulations!</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {this.props.children}
                    </p>
                    <FontAwesomeIcon icon={faStar} size={"2x"} />
                    <FontAwesomeIcon icon={faStar} size={"2x"} />
                    <FontAwesomeIcon icon={faStar} size={"2x"} />
                    <FontAwesomeIcon icon={faStarHalf} size={"2x"} />
                </div>
                <div className="modal-footer">
                    <button className="btn-continue" onClick={this.props.close}>CONTINUE</button>
                </div>
            </div>
        </div>
    )
}
}

export default Completion;