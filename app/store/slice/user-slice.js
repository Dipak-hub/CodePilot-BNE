import {createReducer, createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {rootClient} from '../../utils';
// import {endPoints, status} from '../../constants';
// import {socket} from './../../utils';
// import messaging from '@react-native-firebase/messaging';
import store from './../store';

const initialState = {
  loading: false,
  error: false,
  first_time: true,
  user: {
    _id: '',
    mobile_primary: '',
    user_name: '',
    email: '',
  },
};

// export const fmcSet = createAsyncThunk(
//   'set-device-fnc',
//   async (body, {rejectWithValue}) => {
//     try {
//       const response = await rootClient.post(endPoints.SET_FCM, body);
//       return true;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   },
// );

export const self = createAsyncThunk(
  'user-self',
  async (arg, {getState, dispatch, rejectWithValue}) => {
    const {user} = getState();
    try {
      const response = await rootClient.post(endPoints.USER_SELF);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// export const uploadProfilePic = createAsyncThunk(
//   'kyc-update-profile',
//   async (uri, {rejectWithValue}) => {
//     const formData = new FormData();
//     formData.append('doc', {
//       name: 'image.jpg',
//       uri: uri,
//       type: 'image/jpg',
//     });

//     try {
//       const response = await rootClient.post(endPoints.PROFILE_PIC, formData, {
//         headers: {
//           accept: 'application/json',
//           'content-type': 'multipart/form-data',
//         },
//       });
//       return response.data.path;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   },
// );


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserName(state, action) {
      state.user.user_name = action.payload;
    },
    updateEmail(state, action) {
      state.user.email = action.payload;
    },
    userStateClear(state, action) {
      state = initialState;
    },
  },
  extraReducers: {
    [self.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
      state.isVerified = action.payload.status === status.VERIFIED;
      // socket.emit('newUser', state.user._id);
    },

    [self.pending]: (state, action) => {
      // state.error = false;
      state.loading = true;
    },

    [self.rejected]: (state, action) => {
      // state.error = true;
      state.loading = false;
    },
   
    //  update profile pic --------------------
    // [uploadProfilePic.fulfilled]: (state, action) => {
    //   state.user.profile_pic = action.payload;
    //   state.loading = false;
    //   state.error = false;
    // },

    // [uploadProfilePic.pending]: (state, action) => {
    //   state.error = false;
    //   state.loading = true;
    // },

    // [uploadProfilePic.rejected]: (state, action) => {
    //   state.error = true;
    //   state.loading = false;
    // },
   
    //  upload address-proof  --------------------
    //  fmc set  --------------------
  },
});

// web socket actions -------------------------------------------------------------------
// socket.on('profile-update', data => {
//   store.dispatch(self());
// });

export const {
  updateUserName,
  updateEmail,
  userStateClear,
} = userSlice.actions;

export default userSlice.reducer;
