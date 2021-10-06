import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import COLORS from '../assets/color';
import {PrimaryButton} from '../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {addItemToCart} from '../Redux/Actions/cartActions';

import shallow from 'zustand/shallow';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//import {connect} from 'react-redux';
import cartStore from '../stores/cartStore';

const width = Dimensions.get('screen').width / 2 - 30;

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();

  //const cartItems = useSelector((state) => state.cartItems);
  const [cart] = cartStore((state) => [state.cart]);
  const removeFromCart = cartStore((state) => state.removeFromCart);
  const decreaseCartQuantity = cartStore((state) => state.decreaseCartQuantity);
  const increaseCartQuantity = cartStore((state) => state.increaseCartQuantity);
  //console.log(cart[0].id.name);
  console.log(removeFromCart);
  console.log(cart);
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  console.log(removeFromCart);

  const Card = () => {
    //const state = cartStore();
    //console.log(cart[1].id);

    return (
      <TouchableOpacity>
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
              }}></View>

            <View
              style={{
                height: 100,
                alignItems: 'center',
                marginRight: 10,
                marginTop: 10,
              }}>
              <Text style={{fontWeight: '600', marginTop: 10}}>
                {cart.id.name}
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
                ${cart.id.price}
              </Text>
            </View>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}></View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      {cart.length === 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 300,
            marginBottom: 300,
          }}>
          <Fontisto name="opencart" size={70} color={COLORS.primary} />
          <Text style={{top: 20, fontSize: 15, fontWeight: '200'}}>
            It looks like, your cart is empty yet!
          </Text>
        </View>
      ) : (
        <ScrollView style={{height: 600}}>
          {cart.map((item, index) => (
            <View key={index}>
              <View style={style.cartCard}>
                <Image
                  source={{uri: item.id.image}}
                  style={{height: 80, width: 80}}
                />
                <View
                  style={{
                    height: 100,
                    marginLeft: 10,
                    paddingVertical: 20,
                    flex: 1,
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    {item.id.name}
                  </Text>
                  <Text style={{fontSize: 13, color: COLORS.grey}}>
                    {item.id.category}
                  </Text>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    ${item.id.price}
                  </Text>
                </View>
                <View style={{marginRight: 20, alignItems: 'center'}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 18, marginBottom: 7}}>
                    {item.count}
                  </Text>
                  <View style={style.actionBtn}>
                    <Icon
                      onPress={() => decreaseCartQuantity(item.id)}
                      name="remove"
                      size={25}
                      color={COLORS.white}
                    />
                    <Icon
                      onPress={() => increaseCartQuantity(item.id)}
                      name="add"
                      size={25}
                      color={COLORS.white}
                    />
                  </View>
                  <AntDesign
                    onPress={() => removeFromCart(item.id)}
                    name="delete"
                    size={20}
                    color={COLORS.primary}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
      {cart.length === 0 ? null : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 15}}>
            Total Price
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 15}}>
            $
            {cart
              .reduce((acc, cart) => acc + cart.count * cart.id.price, 0)
              .toFixed(2)}
          </Text>
        </View>
      )}
      {cart.length === 0 ? null : (
        <View style={{marginHorizontal: 30}}>
          <PrimaryButton
            onPress={() => navigation.navigate('SigninScreen')}
            title="CHECKOUT"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

// const mapStateToProps = (state) => {
//   const {cartItems} = state;
//   return {
//     cartItems: cartItems,
//   };
// };

export default CartScreen;

const style = StyleSheet.create({
  card: {
    height: 265,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 130,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

{
  /* <SafeAreaView>

{cart.map((cart) => {
  return{
    <Text></Text>
  }
})}
</SafeAreaView> */
}

{
  /* <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        showsVerticalScrollIndicator={false}
        //keyExtractor={cartItems._id}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={cartItems}
        renderItem={({item}) => <Card cart={item} />}
      /> */
}

{
  /* <Text>{cart[1].id.name}</Text>
<Text>{cart[1].id.brand}</Text>
<Text>{cart[1].id.category}</Text>
<Text>{cart[1].id.countInStock}</Text>
<Text>{cart[1].id.price}</Text> */
}

// <Text key={index}>{item.id.name}</Text>
//             <Text>{item.id.price}</Text>
//             <Text>{item.id.brand}</Text>

{
  /* <ScrollView>
            <View style={style.cartCard}>
              <Image
                source={{uri: item.id.image}}
                style={{height: 80, width: 80}}
              />
              <View
                style={{
                  height: 100,
                  marginLeft: 10,
                  paddingVertical: 20,
                  flex: 1,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  {item.id.name}
                </Text>
                <Text style={{fontSize: 13, color: COLORS.grey}}>
                  {item.id.category}
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  ${item.id.price}
                </Text>
              </View>
              <View style={{marginRight: 20, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
                <View style={style.actionBtn}>
                  <Icon name="remove" size={25} color={COLORS.white} />
                  <Icon name="add" size={25} color={COLORS.white} />
                </View>
              </View>
            </View>
          </ScrollView> */
  // <Text style={{marginTop: 20, marginBottom: 15}}>Shopping Cart</Text>
}
