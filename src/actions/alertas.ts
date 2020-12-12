import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "./types"

interface Alerta {
    msg: string
}

export const mostrarAlerta = (alerta: Alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})
