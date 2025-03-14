import React from "react"
import ReactDOM from "react-dom/client"
import App from "~/App.jsx"
import CssBaseline from "@mui/material/CssBaseline"
import { GlobalStyles } from "@mui/material"
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles"
import theme from "~/theme"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ConfirmProvider } from "material-ui-confirm"
import { store } from "~/redux/store"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'

import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

import { injectStore } from "~/utils/authorizedAxios"
import { io } from 'socket.io-client'
import { API_ROOT } from "./utils/constants"
export const socketIoInstance = io(API_ROOT)

const persistor = persistStore(store)

injectStore(store)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/">

      <PersistGate persistor={persistor}>
        <CssVarsProvider theme={theme}>
          <ConfirmProvider>
            <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
            <CssBaseline />
            <App />
            <ToastContainer position="bottom-right" theme="colored" />
          </ConfirmProvider>
        </CssVarsProvider>
      </PersistGate>

    </BrowserRouter>
  </Provider>
);
