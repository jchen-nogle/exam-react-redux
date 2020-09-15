import React from 'react'
import ProductsDropdown from './ProductsDropdown'

const App = (props) => {
    return(
        <div>
          <ProductsDropdown />
          <span>My product color: <span className="color"></span></span>
        </div>
    )
}

export default App
