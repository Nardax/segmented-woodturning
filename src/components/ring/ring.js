import React, { useState } from 'react';

const Ring = (props) => {
    const [segments, setSegments] = useState(10)

    const addSegment = () => {
        setSegments(segments + 1);
    }

    const deleteSegment = () => {
        setSegments(segments - 1);
    }

    return (
        <div className="ring">
            <div className="ring-title">Ring {props.id}</div>
            <div>
                Segments:
                <button onClick={addSegment}>+</button>
                <input type="number" id="segments" value={segments} />
                <button onClick={deleteSegment}>-</button>
            </div>
        </div>
    );
}

export default Ring;
