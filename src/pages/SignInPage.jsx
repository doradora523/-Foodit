import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import LongButton from '../components/common/LongButton';
import TextAndBackBar from '../components/common/navBar/TextAndBackBar';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessgae, setErrorMessage] = useState('일치하는 회원정보가 없거나, 비밀번호가 일치하지 않습니다.');

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    console.log(event.target);
  };

  const handleSignIn = () => {
    try {
      // API 호출 및 응답 받기
      if (loginSuccess) {
        navigate('/');
      } else {
        console.log('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setErrorMessage(error.message);
      setLoginSuccess(false);
    }
  };

  const handleMoveRegisterPage = () => {
    navigate('/register');
  };

  return (
    <div className="relative">
      <TextAndBackBar title={'로그인'} />
      <form className="input-wrapper flex flex-wrap justify-center mt-[122px]">
        <Input
          type={'text'}
          placeholder={'아이디(이메일) 입력'}
          mb={'15px'}
          onChange={onChangeHandler}
          color={!loginSuccess ? '#ff0000' : '#d9d9d9'}
        />
        <Input
          type={'password'}
          placeholder={'비밀번호 입력'}
          autoComplete={'autoComplete'}
          onChange={onChangeHandler}
          color={!loginSuccess ? '#ff0000' : '#d9d9d9'}
        />
        {!loginSuccess && (
          <span className="text-[13px] relative left-[-25px] mt-[15px] text-[#ff0000]">{errorMessgae}</span>
        )}
      </form>
      <LongButton type={'submit'} contents={'로그인'} bottom={'405px'} onClick={handleSignIn} />
      <div className=" w-[76px] h-[44px] fixed top-[444px] left-1/2 translate-x-[-50%] cursor-pointer">
        <p className="text-[13px] text-gray text-center leading-[44px]" onClick={handleMoveRegisterPage}>
          회원가입
        </p>
      </div>

      {/* 간편로그인 : 추후 api 생성 시 기능개발예정 */}
      {/* <div className="fixed bottom-[70px] left-[50%] translate-x-[-50%]">
        <p className="text-[13px] text-[#6b6b6b] text-center">또는</p>
        <div className="flex mt-[25px]">
          <div className="w-[44px] h-[44px] rounded-full bg-[#ea4235] mr-[15px]"></div>
          <div className="w-[44px] h-[44px] rounded-full bg-[#02CD39] mr-[15px]"></div>
          <div className="w-[44px] h-[44px] rounded-full bg-[#FBE300]"></div>
        </div>
      </div> */}
    </div>
  );
};
export default SignInPage;
