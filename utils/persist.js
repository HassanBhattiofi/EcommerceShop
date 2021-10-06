import {configurePersist} from 'zustand-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {persist} = configurePersist({
  storage: AsyncStorage,
});
export default persist;
