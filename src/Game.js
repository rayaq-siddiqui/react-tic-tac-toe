import React from 'react';
import Board from './Board.js';
import './Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        // const initialState = {
        //     isXTurn: true,
        //     position: Array(9).fill(null),
        // };
        this.state = {
            isXTurn: true,
            position: Array(9).fill(null),
        };

        this.winner = "no winner";
        this.reset = false;

        // we need to bind the function
        this.changeTurns = this.changeTurns.bind(this);
    }

    changeTurns(id) {
        const pos = this.state.position.slice();
        pos[id-1] = this.state.isXTurn ? "X" : "O";
        this.setState({
            isXTurn: !this.state.isXTurn,
            position: pos,
        });
        // console.log(pos);
    }

    // checks to see if the game is over
    gameOver() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const pos = this.state.position.slice();
        console.log(pos);

        for (let i = 0; i < winningCombinations.length; i++) {
            if (pos[winningCombinations[i][0]] 
                    && pos[winningCombinations[i][0]] === pos[winningCombinations[i][1]] 
                    && pos[winningCombinations[i][1]] === pos[winningCombinations[i][2]]) {
                
                this.winner = pos[winningCombinations[i][0]];
                return true;
            }
        }

        return false;
    }

    gameDraw() {
        const pos = this.state.position.slice();

        for (let i = 0; i < pos.length; i++) {
            if (!pos[i]) {
                return false;
            }
        }

        return true;
    }

    render() {
        let gameFinished = this.gameOver();
        let gameDrawn = this.gameDraw();

        return (
            <div className="tic-tac-toe">
                <div className="title">
                    <h1>Tic Tac Toe Game</h1>
                    <p>Created by: Muhammad Rayaq Siddiqui</p>
                </div>
                <div className="board-container">
                    <div className="board">
                        <Board 
                            gameWon={this.winner!=="no winner" ? true : false} 
                            reset={this.reset} 
                            isXTurn={this.state.isXTurn} 
                            changeTurns={this.changeTurns} 
                            resetButton={this.resetTiles}
                        /> 
                    </div>
                </div>
                <div className="information">
                    {
                        gameDrawn ?
                        <p>Game Drawn!</p>
                        : !gameFinished
                        ? <p>Player {this.state.isXTurn ? "X" : "O"}'s turn</p> 
                        : <p>Game Over! {this.winner} has won!</p>
                    }
                    {console.log(this.winner)}
                    {/* <button onClick={this.restartGame}>
                        Restart
                    </button> */}
                </div>
            </div>
        );
    }

}

export default Game;
