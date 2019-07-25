import * as React from 'react';
import './Square.css';

export interface SquareProps {
    value: string;
    onClick: Function;
}

function Square(props:SquareProps) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

export default Square;