import { ADD_RING, DELETE_RING, UPDATE_RING } from "../actionTypes";

const initialState = {
    rings: {
        0: { id: 0, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        1: { id: 1, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        2: { id: 2, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        3: { id: 3, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        4: { id: 4, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        5: { id: 5, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        6: { id: 6, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        7: { id: 7, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        8: { id: 8, segments: 10, height: 2, width: 2, outerDiameter: 10 },
        9: { id: 9, segments: 10, height: 2, width: 2, outerDiameter: 10 }
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_RING: {
            return {
                rings: {
                    ...state.rings,
                    [action.ring.id]: action.ring
                }
            };
        }
        case DELETE_RING: {
            delete state.rings[action.ringId]

            return {
                rings: {
                    ...state.rings
                }
            };
        }
        case UPDATE_RING: {
            state.rings[action.ring.id] = {
                ...state.rings[action.ring.id],
                ...action.ring
            }
            return {
                rings: {
                    ...state.rings
                }
            };
        }
        default:
            return state;
    }
}