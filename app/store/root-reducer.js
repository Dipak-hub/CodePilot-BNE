import {combineReducers} from 'redux';
import userSlice from './slice/user-slice';
import authSlice from './slice/auth-slice';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import categoriesSlice from './slice/categories-slice';
import postSlice from './slice/post-slice';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['errorMessage', 'error'],
};

const userConfig = {
  key: 'user',
  version: 1,
  storage: AsyncStorage,
  keyPrefix: '',
  blacklist: ['errorMessage', 'error'],
};
const authConfig = {
  key: 'auth',
  version: 1,
  storage: AsyncStorage,
  keyPrefix: '',
  blacklist: ['errorMessage', 'error'],
};
const categoriesConfig = {
  key: "categories",
  version: 1,
  storage:AsyncStorage,
  keyPrefix: "",
  blacklist: ["error_message", "error","categories","category"],
};
const postsConfig = {
  key: "posts",
  version: 1,
  storage:storage,
  keyPrefix: "",
  blacklist: ["error_message", "error","posts","post","all_posts"],
};



const rootReducer = combineReducers({
  user: persistReducer(userConfig,userSlice ),
  auth: persistReducer(authConfig, authSlice),
  categories:persistReducer(categoriesConfig,categoriesSlice),
  posts: persistReducer(postsConfig,postSlice)
});

export default persistReducer(persistConfig, rootReducer);
