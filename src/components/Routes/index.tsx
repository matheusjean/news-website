import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import News from '../../models/news'
import Carrousel from '../../pages/Carrousel'
import HomePage from '../../pages/Homepage'
import { Post } from '../Post'

export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Carrousel />} /> */}
        <Route path="/news/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}
