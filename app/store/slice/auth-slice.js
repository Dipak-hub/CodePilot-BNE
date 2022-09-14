import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {rootClient, otpGenerator} from '../../utils';
import {endPoints} from '../../constants';
import {SMS_URL} from '@env';
import axios, { Axios } from 'axios'

const initialState = {
  isLoggedIn: false,
  loading: false,
  otp_sent:false,
  otp: false,
  error: false,
  // success: false,
  otp_sessionId:''
};

export const login = createAsyncThunk(
  'user-login',
  async (body, {rejectWithValue}) => {
    try{
        const res=await axios.get(`https://2factor.in/API/V1/4cd1c359-d970-11eb-8089-0200cd936042/SMS/VERIFY/${body.details}/${body.otp}`)
        // console.log(res.data)
       return res.data
      }
      catch(error){
        // console.log(error.res)
      }
  },
);

export const sendOtp = createAsyncThunk(
  'send-otp',
  async (mobile_number, {rejectWithValue}) => {
    try{
      const res=await axios.get(`https://2factor.in/API/V1/4cd1c359-d970-11eb-8089-0200cd936042/SMS/${mobile_number}/AUTOGEN`)
      return res.data
    }
    catch(e){
      // console.log(e)
    }
  },
);

const authSlice = createSlice({
  name: 'user-auth',
  initialState,
  reducers: {
    authStateClear:()=>initialState,
    authStateError(state, action) {
      state.error = action.payload;
      state.goBack = false;
      state.errorMessage = null;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if(action.payload.Status==='Success'){
     state.isLoggedIn= true
      }
      else{
        state.isLoggedIn = false
      }
     
      state.error = false;
      state.loading = false;
      state.success = true;
    },

    [login.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },

    [login.rejected]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
    },
    //  send otp --------------------------
    [sendOtp.fulfilled]: (state, action) => {

      if(action.payload.Status==='Success'){
          state.otp_sessionId=action.payload.Details
          state.otp_sent=true
      }
     
    },

    [sendOtp.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },

    [sendOtp.rejected]: (state, action) => {
     state.loading=false,
     state.otp_sent=false
     state.errorMessage=action.payload.Details
    },
  },
});

export const {authStateClear, authStateError} = authSlice.actions;

export default authSlice.reducer;
