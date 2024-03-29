import {StyleSheet} from 'react-native';
import COLORS from './color';
const STYLES = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 50,
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    color: COLORS.dark,
    paddingLeft: 10,
    paddingBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    borderBottomWidth: 1,
    borderColor: COLORS.grey,
    //borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: {marginTop: 15, position: 'absolute'},
  btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    marginRight: 25,
    borderRadius: 65,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  },
  btnImage: {width: 20, height: 20, marginLeft: 5},

  line: {height: 1, width: 30, backgroundColor: '#a5a5a5'},
});

export default STYLES;
