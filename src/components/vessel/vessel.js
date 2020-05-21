import React, { useState } from 'react';
import Ring from '../ring/ring';

const Vessel = () => {
    const [rings, setRings] = useState([])

    const addRing = () => {
        let newRing = {
            text: "Ring " + rings.length,
            key: rings.length
        };

        setRings(rings.concat(newRing));
    }

    const deleteRing = () => {
        let filteredRings = rings.filter(r => r.key != rings.length - 1);
        setRings(filteredRings);
    }

    return (
        <div>
            Vessel Configurations
            <div>
                <div>Number of Rings:</div>
                <div>
                    <button onClick={addRing}>+</button>
                    <input type="number" id="rings" value={rings.length} />
                    <button onClick={deleteRing}>-</button>
                </div>
            </div>
            Ring Configurations
            {rings.map(r => { return <Ring key={r.key} text={r.text} /> })}
        </div>
    );
}

export default Vessel;
