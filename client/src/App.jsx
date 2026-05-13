import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import View from './pages/View'
import Layout from './components/layouts/Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/view' element={<View />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
