const initialState = [1];
export default function RegisterShowForm(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_REG_FORM':
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