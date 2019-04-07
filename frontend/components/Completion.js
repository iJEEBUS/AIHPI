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
        var meh =0;
        const worth = 1/ this.props.rounds
        this.props.data.filter(function(value) {
            if (value.correct == value.answer) {
                meh=meh+worth
            }
          });
        const score = (meh.toFixed(3)) *100;
        var starScore =20;
        var stars = []
        while(starScore < score){
           stars.push(faStar)
           starScore =starScore+ 20; 
        }
        if(starScore -10 <= score){
            stars.push(faStarHalf)
        }
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
                    You have completed the game with a score of: {score}%!
                    Great Job!
                    </p>
                    {stars.map(i => (         
                        <FontAwesomeIcon icon={i} size={"2x"} />      
                    ))}

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