import './App.css'
import { createBrowserRouter , createRoutesFromElements ,RouterProvider, Route} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import BlogLayout from './layout/BlogLayout'
import SinglePostLayout from './layout/SinglePostLayout'
import PagesLayout from './layout/PagesLayout'
import ContactLayout from './layout/ContactLayout'
import Home from './pages/Home'

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='blog' element={<BlogLayout/>}/>
        <Route path='post' element={<SinglePostLayout/>}/>
        <Route path='pages' element={<PagesLayout/>}/>
        <Route path='contact' element={<ContactLayout/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={Router}/>
  )
}

export default App
