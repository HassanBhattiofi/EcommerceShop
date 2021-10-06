import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addItemToCart} from '../Redux/Actions/cartActions';
//import {UseStore} from 'zustand';
import COLORS from '../assets/color';
import cartStore from '../stores/cartStore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import {useDispatch} from 'react-redux';
import {getProducts} from '../services/services';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import {addToCart} from '../features/cartSlice';
//import {connect} from 'react-redux';
//import * as actions from '../Redux/Actions/cartActions';

const width = Dimensions.get('screen').width / 2 - 30;

const Home = ({navigation}) => {
  const [product, setProduct] = useState('');
  const [error, setError] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const dispatch = useDispatch();

  const {cartItems} = useSelector((state) => state.cartItems);

  //console.log(addItemToCart(product));

  const addToCart = cartStore((state) => state.addToCart);

  const categories = ['Laptops', 'Electronics', 'Headphones', 'Clothes'];
  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                categoryIndex == index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProduct(products);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  const Card = ({product}) => {
    console.log(product.name);
    //const state = cartStore();

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', product)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons
                name="favorite-border"
                size={20}
                color={COLORS.green}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                height: 100,
              }}>
              <Image
                style={{
                  flex: 1,
                  resizeMode: 'contain',
                  alignItems: 'center',
                  height: 100,
                  width: 150,
                  flexDirection: 'row',
                }}
                source={{uri: product.image}}
              />
            </View>

            <View
              style={{
                height: 100,
                alignItems: 'center',
                marginRight: 10,
                marginTop: 10,
              }}>
              <Text style={{fontWeight: '600', marginTop: 10}}>
                {product.name}
              </Text>
              <Text
                style={{
                  justifyContent: 'center',
                  paddingTop: 15,
                  paddingRight: 80,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  fontSize: 13,
                  fontWeight: '700',
                }}>
                ${product.price}
              </Text>
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons
                name="add-shopping-cart"
                onPress={() => addToCart(product)}
                size={25}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 30,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <View>
          <Icon
            name="sort-variant"
            size={30}
            style={{marginLeft: 25, marginTop: 15}}
            onPress={navigation.toggleDrawer}
          />
        </View>
        <View>
          <IconAntDesign
            name="shoppingcart"
            onPress={() => navigation.navigate('CartScreen')}
            size={30}
            style={{marginRight: 25, marginTop: 15}}
          />
        </View>
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <IconAntDesign name="search1" size={22} style={{marginLeft: 10}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <MaterialIcons name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        showsVerticalScrollIndicator={false}
        keyExtractor={product._id}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        data={product}
        numColumns={2}
        renderItem={({item}) => <Card product={item} />}
      />
    </SafeAreaView>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItemToCart: (product) =>
//       dispatch(actions.addToCart({quantity: 1, product})),
//   };
// };

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    marginRight: 13,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 265,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default Home;
