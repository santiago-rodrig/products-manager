import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA,
} from '../actions/types'

const initialState = {
    alerta: null
}

export default function alertasReducer(state = initialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                alerta: null
            }
        default:
            return state
    }
}