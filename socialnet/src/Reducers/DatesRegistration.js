const initialState = {
    firstName: 
};
export default function DateRegistration(state = initialState, action) {
    switch (action.type) {
        case 'DATES_REG':
            return [
                ...state,
                action.payload
            ]
            break;
        default:
            break;
    }
    return state;
}