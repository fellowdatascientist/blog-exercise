import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import BlogLayout from './layout/BlogLayout'
import SinglePostLayout from './layout/SinglePostLayout'
import PagesLayout from './layout/PagesLayout'
import ContactLayout from './layout/ContactLayout'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ContextProvider from './context/ContextProvider'
import NotFound from './pages/NotFound'

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path='blog' element={<BlogLayout />} />
        <Route path='post/:id' element={<SinglePostLayout />} />
        <Route path='pages' element={<PagesLayout />} />
        <Route path='contact' element={<ContactLayout />} />
        <Route path='*' element={<NotFound/>}/>
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
