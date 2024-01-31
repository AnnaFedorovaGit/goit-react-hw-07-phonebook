import ReactDOM from 'react-dom/client'
import App from 'App'
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'


const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider >
);
