import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/v1/';

// 회원가입 API 호출
export const signupAPI = async ({ email, password, nickname }) => {
  const userInfo = {
    userId: email,
    pw: password,
    email: email,
    name: nickname,
  };
  try {
    const response = await axios.post(`${BASE_URL}/auth/join/Proc`, userInfo);
    const result = response.data;

    if (result.ACCESS_TOKEN) {
      localStorage.setItem('signup-token', result.ACCESS_TOKEN);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// 로그인 API 호출
export const signInAPI = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/join/check`, {
      email,
      password,
    });
    const result = response.data;

    if (result.ACCESS_TOKEN) {
      localStorage.setItem('Authorization', result.ACCESS_TOKEN);
      localStorage.setItem('userId', result.id);
      localStorage.setItem('name', result.name);
      localStorage.setItem('email', result.email);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// 로그아웃 API 호출
export const logoutAPI = async () => {
  try {
    await axios.get(`${BASE_URL}/logout`);
    localStorage.removeItem('login-token');
  } catch (error) {
    throw new Error(error.message);
  }
};
