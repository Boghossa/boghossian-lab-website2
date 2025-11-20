
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Research from './pages/Research'
import People from './pages/People'
import Publications from './pages/Publications'
import News from './pages/News'
ReactDOM.createRoot(document.getElementById('root')).render( <React.StrictMode> <BrowserRouter> <Layout> <Routes> <Route path="/" element={<Home />} /> <Route path="/research" element={<Research />} /> <Route path="/people" element={<People />} /> <Route path="/publications" element={<Publications />} /> <Route path="/news" element={<News />} /> } /> </Routes> </Layout> </BrowserRouter> </React.StrictMode>
)
