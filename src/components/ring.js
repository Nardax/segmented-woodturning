import React from 'react';
import { useDispatch } from 'react-redux'
import { UPDATE_RING } from '../redux/actionTypes';

const Ring = (props) => {
    const dispatch = useDispatch();

    const ring = {
        ...props.data
    };

    const updateSegments = (e) => {
        ring.segments = parseInt(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    const updateOuterDiameter = (e) => {
        ring.outerDiameter = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    const updateWidth = (e) => {
        ring.width = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    const updateHeight = (e) => {
        ring.height = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    return (
        <div className="ring">
            <div className="ring-title">
                <h3>Ring {ring.id + 1}</h3>
            </div>
            <div>
                <div>
                    Segments: <input type="number" onChange={updateSegments} value={ring.segments} step="any" min="1" max="99"/>
                </div>
                <div>
                    Outer Diameter: <input type="number" onChange={updateOuterDiameter} value={ring.outerDiameter} step="any" min="1" max="99"/>
                </div>
                <div>
                    Width: <input type="number" onChange={updateWidth} value={ring.width} step="any" min="1" max="99"/>
                </div>
                <div>
                    Height: <input type="number" onChange={updateHeight} value={ring.height} step="any" min="1" max="99"/>
                </div>
            </div>
        </div>
    );
}

export default Ring;
