import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './pages/Home/'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './components/Survey.jsx'
import Header from './components/Header.jsx'
import Error from './components/Error.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
