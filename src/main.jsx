import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Communities from "./components/usecases/Communities"
import People from './components/usecases/People.jsx'
import Plan from './components/usecases/Plan.jsx'
import Question from './components/usecases/Question.jsx'
import DaoCave from './components/usecases/DaoCave.jsx'
import Footer from './components/usecases/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Communities></Communities>
    <People></People>
    <Plan></Plan>
    <Question></Question>
    <DaoCave></DaoCave>
    <Footer></Footer>
    <App />
  </React.StrictMode>,
)
