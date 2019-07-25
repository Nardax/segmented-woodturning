import * as React from 'react';
import Square from './Square';
import './Board.css';

export interface BoardProps { }

interface BoardState {
    squareValues: Array<string>;
    xIsNext: boolean;
    winner: string | null;
}

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
        super(props);
        this.state = {
            squareValues: Array<string>(9),
            xIsNext: true,
            winner: null
        }
    }

    handleSquareClick(i: number) {
        if (!this.state.winner)
        {
            const squareValues = this.state.squareValues.slice();
            squareValues[i] = this.state.xIsNext ? 'X' : 'O';
            const winner = calculateWinner(squareValues);
            this.setState({
                squareValues: squareValues,
                xIsNext: !this.state.xIsNext,
                winner: winner
            });
        }
    }

    renderSquare(i: number) {
        return <Square value={this.state.squareValues[i]}
                       onClick={() => this.handleSquareClick(i)} />
    }

    render() {
        let status
        if (this.state.winner) {
            status = 'Winner: ' + this.state.winner;
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;

function calculateWinner(squareValues: Array<string>) {
    const winners = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winners.length; i++) {
        const [a, b, c] = winners[i];
        if (squareValues[a] && squareValues[a] === squareValues[b] && squareValues[a] === squareValues[c]) {
            return squareValues[a];
        }
    }

    return null;
}