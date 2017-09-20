const initialState = { };

export const CHANGE_PROP = 'CHANGE_PROP';

const componentPropsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PROP:
            return {
                ...state,
                [action.payload.componentPath]: {
                    ...state[action.payload.componentPath],
                    [action.payload.prop]: action.payload.value
                }
            };
    }

    return state;
};

export const changeProp = (componentPath, prop, value) => ({
    type: CHANGE_PROP,
    payload: {
        componentPath,
        prop,
        value
    }
});

export default componentPropsReducer;