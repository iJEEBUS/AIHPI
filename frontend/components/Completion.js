import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf  } from '@fortawesome/free-regular-svg-icons'
import './Completion.css';

class Completion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore:0,
            score:50,
            stars:[],
            commentNumber: 0
        };
    }
    scoreChange = () =>{
        if(this.state.currentScore <= this.state.score){
            var currentScore
            var commentNumber = 0;
            if(this.state.currentScore < this.state.score){
                currentScore = this.state.currentScore +1;
            }else{
                currentScore = this.state.score;
                if(this.state.score > 80){
                    commentNumber = 3;
                }else if(this.state.score > 50){
                    commentNumber = 2;
                }else{
                    commentNumber = 1;
                }
            }
            var starScore =20;
            var stars = []
            while(starScore <= this.state.currentScore){
               stars.push(faStar)
               starScore =starScore+ 20; 
            }
            if(starScore -10 <= this.state.currentScore){
                stars.push(faStarHalf)
            }
            this.setState({ 
                currentScore:  currentScore,
                stars: stars,
                commentNumber: commentNumber
            })
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.scoreChange(), 50);
        var meh =0;
        const worth = 1/ this.props.rounds
        this.props.data.filter(function(value) {
            if (value.correct == value.answer) {
                meh=meh+worth
            }
          });
        const score = (meh.toFixed(3)) *100;
        this.setState({ score:  score})
    }
    render() {
        const comments = [""," Better Luck Next Time", "Nice!", "Great Job!"];
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Congratulations!</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                    You have completed the game with a score of: {this.state.currentScore}%!<br/>
                    {comments[this.state.commentNumber]}
                    </p>
                    {this.state.stars.map(i => (         
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