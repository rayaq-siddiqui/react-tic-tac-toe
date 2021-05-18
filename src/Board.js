import React from 'react';
import Tile from './Tile.js'
import './Board.css';

class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isXTurn: true,
    //         position: Array(9).fill(null),
    //     };

    //     // we need to bind the function
    //     this.changeTurns = this.changeTurns.bind(this);
    // }

    // changeTurns(id) {
    //     const pos = this.state.position.slice();
    //     pos[id-1] = this.state.isXTurn ? "X" : "O";
    //     this.setState({
    //         isXTurn: !this.state.isXTurn,
    //         position: pos,
    //     });
    //     console.log(pos);
    // }

    render() {
        let reset = this.props.reset;
        if (reset) {
            this.props.resetButton();
        }
        return (
            <React.Fragment>
                <div className="board-row">
                    <Tile gameWon={this.props.gameWon} id={1} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                    <Tile gameWon={this.props.gameWon} id={2} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                    <Tile gameWon={this.props.gameWon} id={3} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                </div>
                <div className="board-row">
                    <Tile gameWon={this.props.gameWon} id={4} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                    <Tile gameWon={this.props.gameWon} id={5} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                    <Tile gameWon={this.props.gameWon} id={6} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                </div>
                <div className="board-row">
                    <Tile gameWon={this.props.gameWon} id={7} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                    <Tile gameWon={this.props.gameWon} id={8} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                    <Tile gameWon={this.props.gameWon} id={9} reset={reset} isXTurn={this.props.isXTurn} changeTurns={this.props.changeTurns} />
                </div>
            </React.Fragment>
        )
    }
}

export default Board;
