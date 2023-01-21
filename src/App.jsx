import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'
import CheckoutPage from './components/CheckoutPage'
import Root from './components/Root'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/checkout-page' element={<CheckoutPage/>}/>
      </Route>
    )
  )

  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
