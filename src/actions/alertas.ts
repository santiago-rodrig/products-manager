import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "./types"

interface Alerta {
    msg: string
}

export const mostrarAlerta = (alerta: Alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export const ocultarAlerta = (alerta: Alerta) => ({
    type: OCULTAR_ALERTA,
    payload: alerta
})
