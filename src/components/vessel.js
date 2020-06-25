import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Ring from './ring';
import { ADD_RING, DELETE_RING } from '../redux/actionTypes';

const Vessel = () => {
    const dispatch = useDispatch();

    const rings = useSelector(state => state.vessel.rings);

    const addRing = () => {
        let ring = {
             id: Object.keys(rings).length, 
             segments: 10,
             height: 2,
             width: 2,
             outerDiameter: 10
        }

        dispatch({ type: ADD_RING, ring: ring });
    }

    const deleteRing = () => {
        dispatch({ type: DELETE_RING, ringId: Object.keys(rings).length - 1 });
    }

    return (
        <div>
            <h3>Vessel Configuration</h3>
            <div>
                    Rings: <button onClick={deleteRing}>-</button>
                    <input id="rings" value={Object.keys(rings).length} min="1" max="99"/>
                    <button onClick={addRing}>+</button>
    
            </div>
            <div className="ring-details">
                <div className="ring-id">ring</div>
                <div className="ring-segments">segments</div>
                <div className="ring-outer-diameter">outer diameter</div>
                <div className="ring-width">width</div>
                <div className="ring-height">height</div>
            </div>
            {Object.keys(rings).reverse().map(key => { 
                let ring = rings[key];
                return <Ring key={ring.id} data={ring} /> 
            })}
        </div>
    );
}

export default Vessel;
