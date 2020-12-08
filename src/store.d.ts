declare var reduxPoweredWindow: Window &
    typeof globalThis & {
        __REDUX_DEVTOOLS_EXTENSION__?: Function
    }

export default reduxPoweredWindow
