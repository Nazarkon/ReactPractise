import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import ShoppingCartContextProvider from './store/shopping-card-contex.jsx';

function App() {
  return (
    <ShoppingCartContextProvider>
      <Header/>
      <Shop>
         {DUMMY_PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Product {...product} />
                  </li>
                ))}
      </Shop>
    </ShoppingCartContextProvider>
  );
}

export default App;
