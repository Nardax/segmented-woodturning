import React, { useState } from 'react';
import Ring from '../ring/ring';

const Vessel = () => {
    const [rings, setRings] = useState([])

    const addRing = () => {
        let newRing = {
            id: rings.length + 1
        };

        setRings(rings.concat(newRing));
    }

    const deleteRing = () => {
        let filteredRings = rings.filter(r => r.id !== rings.length);
        setRings(filteredRings);
    }

    return (
        <div>
            Vessel Configuration
            <div>
                <div>
                    Rings:
                    <button onClick={addRing}>+</button>
                    <input type="number" id="rings" value={rings.length} />
                    <button onClick={deleteRing}>-</button>
                </div>
            </div>
            {rings.map(r => { return <Ring key={r.id} id={r.id} /> })}
        </div>
    );
}

export default Vessel;
