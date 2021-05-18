// required imports
import React from 'react';
import './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",  // X or O
            id: this.props.id,
        };

        this.count = 0;

        // we need to bind the function
        this.tileClicked = this.tileClicked.bind(this);
    }

    tileClicked(evt) {
        if (this.state.value === "" && !this.props.gameWon) {
            this.setState({
                value: this.props.isXTurn ? "X" : "O",
            });
    
            this.props.changeTurns(this.state.id);
        }
    }

    render() {
        return (
            <button className="square" onClick={this.tileClicked}>
                {this.state.value}
            </button>
        );
    }
}

export default Tile;
