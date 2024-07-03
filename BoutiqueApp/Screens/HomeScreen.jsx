import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import { CartContext } from '../CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const PRODUCTS = [
  { id: '1', name: 'Office Wear', price: 120,description:'reversible angora cardigan', image: require('../assets/dress1.png') },
  { id: '2', name: 'Black', price: 120,description:'reversible angora cardigan', image: require('../assets/dress2.png') },
  { id: '3', name: 'Church Wear',description:'reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
  { id: '4', name: 'Lamerei',description:'reversible angora cardigan', price: 120, image: require('../assets/dress4.png') },
  { id: '5', name: '21WN',description:'reversible angora cardigan', price: 120, image: require('../assets/dress5.png') },
  { id: '6', name: 'Lopo',description:'reversible angora cardigan', price: 120, image: require('../assets/dress6.png') },
  { id: '7', name: '21WN',description:'reversible angora cardigan', price: 120, image: require('../assets/dress7.png') },
  { id: '8', name: 'Lame',description:'reversible angora cardigan', price: 120, image: require('../assets/dress3.png') },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={{marginHorizontal:10}} name='bars' size={30} onPress={()=>navigation.openDrawer()}/>
          <Image style={styles.logo} source={require('../assets/Logo.png')}/>
          <TouchableOpacity>
            <Icon style={{marginLeft:35}} name='search' size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon style={{marginHorizontal:10}} name='shopping-bag' size={30}/>
          </TouchableOpacity>
          
      </View>
      <View style={styles.story}>
          <Text style={styles.storyText}>OUR STORY</Text>
          <TouchableOpacity style={[styles.storyIcons,{marginLeft:140}]}>
          <Icon style={{marginLeft:5}} name='sliders' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storyIcons}>
          <Icon style={{marginLeft:3}} name='filter' size={25} color={'#ff944d'}/>
          </TouchableOpacity>
          </View>
      <FlatList
      showsVerticalScrollIndicator={false}
      style={{marginBottom:250}}
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={ item.image } style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>${item.price}</Text>
            <Icon style={{left:170,top:-100}}
            name="plus-circle"
             size={30} 
             onPress={() => addToCart(item)}
           />
          </View>
        )}
        numColumns={2}

      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  productContainer: {
    alignItems: 'left',
    padding: 2,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 8,
  },
  name:{
    fontSize:18,
  },
  description:{
    color:'#737373',
    fontSize:14
  },
  amount:{
    fontSize:18,
    color:'#ff944d'
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    verticalAlign:'center',
  },
  story:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    marginBottom:10,
    verticalAlign:'center',
  },
  logo:{
    marginLeft:70,
    height:48,
    width:120
  },
  storyText:{
    fontSize:26,
    fontStyle:'italic',
    fontFamily:'arial',
    marginLeft:10,
  },
  storyIcons:{
    backgroundColor:'#e6e6e6',
    width:43,
     padding:8,
     borderRadius:50
  }
});

export default HomeScreen;
