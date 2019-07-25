import * as React from 'react';
import Square from './Square';
import './Board.css';

export interface BoardProps {
    squareValues: Array<string>;
    onClick: Function;
 }

function Board(props: BoardProps) {
    return (
        <div>
            <div className="board-row">
                {renderSquare(props.squareValues, props.onClick, 0)}
                {renderSquare(props.squareValues, props.onClick, 1)}
                {renderSquare(props.squareValues, props.onClick, 2)}
            </div>
            <div className="board-row">
                {renderSquare(props.squareValues, props.onClick, 3)}
                {renderSquare(props.squareValues, props.onClick, 4)}
                {renderSquare(props.squareValues, props.onClick, 5)}
            </div>
            <div className="board-row">
                {renderSquare(props.squareValues, props.onClick, 6)}
                {renderSquare(props.squareValues, props.onClick, 7)}
                {renderSquare(props.squareValues, props.onClick, 8)}
            </div>
        </div>
    );
}

export default Board;

function renderSquare(squareValues: Array<string>, onClick: Function, i: number) {
    return <Square value={squareValues[i]}
                   onClick={() => onClick(i)} />
}