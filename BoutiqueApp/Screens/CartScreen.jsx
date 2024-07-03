import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import { CartContext } from '../CartContext';
import CartItem from '../Cartitem';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  
    <SafeAreaView>
      <View style={styles.cartItems}>
        <Image style={{marginLeft:150}} source={require('../assets/Logo.png')}/>
        <TouchableOpacity>
        <Icon style={{marginRight:10}} name='search' size={25}/>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth: 1,borderColor: '#ccc'}}>
          <Text style={styles.checkout}>CHECKOUT</Text>
        </View>
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} removeFromCart={removeFromCart} />
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>EST.TOTAL:                                               <Text style={{color:'#ff944d',fontSize:20}}> ${getTotal()}</Text></Text>
        </View>
      </View>
      <View style={styles.checkContainer}>
        <TouchableOpacity style={styles.checkOutTab}>
          <Text style={[styles.checkout,{color:'#fff',fontSize:24,marginVertical:20}]}>CHECKOUT</Text>
            <Icon style={{top:-50,left:90}} size={28} color={'#fff'} name='shopping-bag'/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:30,
    padding: 10,
    
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItems:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    padding:10
  },
  checkout:{
    textAlign:'center',
    fontSize:20,
    fontFamily:'arial',
    fontWeight:'bold',
  },
  checkOutTab:{
    backgroundColor:'#000',
    padding:3,
  },
  checkContainer:{
    display:'flex',
  
  }
});

export default CartScreen;
