import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signupStart(state) {
      state.loading = true;
      state.error = null;
    },
    signupSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signupFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
} = authSlice.actions;

export default authSlice.reducer;

const BASE_URL = 'http://localhost:8080/api/v1/';

// 회원가입 API 호출
export const signupAPI = async () => {
  const { email, password, nickname } = this.state;
  const userInfo = {
    userId: email,
    pw: password,
    email: email,
    name: nickname,
  };
  try {
    const response = await axios.post(`${BASE_URL}/auth/join/Proc`, userInfo, {
      headers: { 'Content-Type': 'application/json' },
    });
    const result = response.data;

    if (result.TOKEN) {
      localStorage.setItem('TOKEN', result.TOKEN);
      localStorage.setItem('signin_id', userInfo.userId);
    }
  } catch (error) {
    console.error(error);
  }
};

// 로그인 API 호출
export const signInAPI = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/join/check`, credentials);
    return response.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 로그아웃 API 호출
export const logoutAPI = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
