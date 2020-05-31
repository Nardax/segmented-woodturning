import { ADD_RING, DELETE_RING, UPDATE_RING } from "../actionTypes";

const initialState = {
    rings: {
        0: { id: 0, segments: 11, height: 2, width: 2, outerDiameter: 10 },
        1: { id: 1, segments: 12, height: 2, width: 2, outerDiameter: 10 },
        2: { id: 2, segments: 13, height: 2, width: 2, outerDiameter: 10 }
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