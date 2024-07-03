import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <DrawerNavigator />
    </CartProvider>
  );
};

export default App;
