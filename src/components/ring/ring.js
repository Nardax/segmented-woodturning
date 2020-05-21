import React from 'react'

const Ring = props => {
    return (
        <div key={props.key}>{props.text}</div>
    );
}

export default Ring;
