import { ADD_TO_CART } from "./Constant";

const initialState = [];

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
};
