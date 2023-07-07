import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Communities from "./components/usecases/Communities"
import People from './components/usecases/People.jsx'
import Plan from './components/usecases/Plan.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Communities></Communities>
    <People></People>
    <Plan></Plan>
    <App />
  </React.StrictMode>,
)
