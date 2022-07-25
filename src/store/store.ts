interface defaultStateShema {
    navigation: boolean;
}

const defaultState: defaultStateShema = {
    navigation: false,
}

function navigationReducer(state = defaultState, action: any) {
    if (typeof state === 'undefined') {
        return false
    }

    switch (action.type) {

        case 'navigation_true':
            return { ...state, navigation: true }

        case 'navigation_false':
            return { ...state, navigation: false }

        default: return state
    }
}

export default navigationReducer;
