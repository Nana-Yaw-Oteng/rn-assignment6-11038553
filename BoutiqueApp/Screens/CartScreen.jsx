import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet, Text } from 'react-native';
import { CartContext } from '../CartContext';
import CartItem from '../Cartitem';

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} removeFromCart={removeFromCart} />
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Est. Total: ${getTotal()}</Text>
        <Button title="Checkout" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
