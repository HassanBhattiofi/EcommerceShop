import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/color';
import STYLES from '../assets/Style';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginLeft: 25, top: 20}}>
          <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        </View>
        <View style={{marginTop: 40, marginLeft: 25, marginRight: 25}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.grey}}>
            Sign up to continue
          </Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Name" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Confirm Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Sign Up
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../assets/images/facebook.png')}
              />
            </View>
            <View style={{width: 5, paddingRight: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 25,
                  marginRight: 25,
                }}>
                Sign up with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../assets/images/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.grey, fontWeight: 'bold'}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Text
              style={{color: COLORS.pink, fontWeight: 'bold', marginLeft: 6}}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
