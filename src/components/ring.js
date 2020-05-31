import React from 'react';
import { useDispatch } from 'react-redux'
import { UPDATE_RING } from '../redux/actionTypes';

const Ring = (props) => {
    const dispatch = useDispatch();

    const ring = {
        ...props.data
    };

    const addSegment = () => {
        ring.segments++;
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    const deleteSegment = () => {
        ring.segments--;
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    return (
        <div className="ring">
            <div className="ring-title">Ring {ring.id + 1}</div>
            <div>
                Segments:
                <button onClick={deleteSegment}>-</button>
                <input type="number" id="segments" value={ring.segments} min="1" max="99"/>
                <button onClick={addSegment}>+</button>
            </div>
        </div>
    );
}

export default Ring;
