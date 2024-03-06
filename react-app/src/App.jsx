/* eslint-disable no-unused-vars */
import './App.css'
import {createClient} from "@supabase/supabase-js"
import ProductList from './components/ProductList'




// console.log(products)


function App() {
  return (
    <>
      <h1>Hello World</h1>
      <ProductList />
    </>
  )
}

export default App
