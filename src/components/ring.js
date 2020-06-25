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

    const updateOffset = (e) => {
        ring.offset = parseFloat(e.target.value);
        dispatch({ type: UPDATE_RING, ring: ring });
    }

    return (
        <div className="ring-details">
            <div className="ring-id">{ring.id + 1}</div>
            <div className="ring-segments"><input onChange={updateSegments} value={ring.segments} /></div>
            <div className="ring-outer-diameter"><input onChange={updateOuterDiameter} value={ring.outerDiameter} /></div>
            <div className="ring-width"><input onChange={updateWidth} value={ring.width} /></div>
            <div className="ring-height"><input onChange={updateHeight} value={ring.height} /></div>
            <div className="ring-offset"><input onChange={updateOffset} value={ring.offset} /></div>
        </div>
    );
}

export default Ring;
