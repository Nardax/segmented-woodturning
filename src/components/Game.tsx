import * as React from 'react';
import Board from './Board';
import './Game.css';

export interface GameProps {}

interface BoardHistory {
    squareValues: Array<string>
}

interface GameState {
    boardHistory: Array<BoardHistory>;
    move: number;
    xIsNext: boolean;
    winner: string | null;
}

class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);
        this.state = {
            boardHistory: [{squareValues: Array<string>(9)}],
            move: 0,
            xIsNext: true,
            winner: null,
        }
    }

    handleSquareClick(i: number) {
        if (!this.state.winner)
        {
            const boardHistory = this.state.boardHistory.slice(0, this.state.move + 1);
            const currentBoard = boardHistory[boardHistory.length -1];
            const squareValues = currentBoard.squareValues.slice();
            squareValues[i] = this.state.xIsNext ? 'X' : 'O';
            const winner = calculateWinner(squareValues);
            this.setState({
                boardHistory: boardHistory.concat([{squareValues: squareValues}]),
                move: boardHistory.length,
                xIsNext: !this.state.xIsNext,
                winner: winner
            });
        }
    }

    jumpTo(move: number)
    {
        this.setState({
            move: move,
            xIsNext: (move % 2) === 0,
        });
    }

    render() {
        const boardHistory = this.state.boardHistory;
        const currentBoard = boardHistory[this.state.move];
        const squareValues = currentBoard.squareValues.slice();

        let status
        if (this.state.winner) {
            status = 'Winner: ' + this.state.winner;
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = boardHistory.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board squareValues={squareValues}
                           onClick={(i:number) => this.handleSquareClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;

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