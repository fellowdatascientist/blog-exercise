import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import BlogLayout from './layout/BlogLayout'
import SinglePostLayout from './layout/SinglePostLayout'
import PagesLayout from './layout/PagesLayout'
import ContactLayout from './layout/ContactLayout'
import Home from './pages/Home'
import ContextProvider from './context/ContextProvider'

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='blog' element={<BlogLayout />} />
        <Route path='post/:id' element={<SinglePostLayout />} />
        <Route path='pages' element={<PagesLayout />} />
        <Route path='contact' element={<ContactLayout />} />
      </Route>
    )
  )

  return (
    <ContextProvider>
      <RouterProvider router={Router} />
    </ContextProvider>
  )
}

export default App
