import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import TextAndBackBar from '../components/common/navBar/TextAndBackBar';
import styled from 'styled-components';
import LongButton from '../components/common/LongButton';

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  height: 77px;
  margin-bottom: 40px;
`;

const StyledLabel = styled.label`
  width: 100%;
  font-size: 14px;
`;

const RegisterPage = () => {
  const inputFields = [
    { id: 'email', label: '아이디', type: 'email' },
    { id: 'password', label: '비밀번호', type: 'password' },
    { id: 'passwordCheck', label: '비밀번호 재확인', type: 'password' },
    { id: 'nickname', label: '닉네임', type: 'text' },
  ];
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const existedEmail = 'test@test.com';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [errors, setErrors] = useState({
    email: { message: '아이디를 입력해주세요.', isError: false },
    password: { message: '8~16자리의 비밀번호를 입력해주세요.', isError: false },
    passwordCheck: { message: '확인을 위하여 위와 동일하게 입력해주세요.', isError: false },
    nickname: { message: '', isError: false },
  });
  const navigate = useNavigate();

  // 유효성 검사
  const validateField = (name, value) => {
    const validationErrors = { ...errors };

    if (name === 'email') {
      setEmail(value);
      validationErrors.email = {
        message:
          value.trim() === ''
            ? '아이디를 입력해주세요.'
            : emailRegex.test(value)
            ? value === existedEmail
              ? '이미 사용중인 아이디입니다.'
              : ''
            : '유효한 이메일 형식이 아닙니다.',
        isError: value.trim() === '' || !emailRegex.test(value) || value === existedEmail,
      };
    } else if (name === 'password') {
      setPassword(value);
      validationErrors.password = {
        message:
          value.trim() === ''
            ? '8~16자리의 비밀번호를 입력해주세요.'
            : value.length < 8 || value.length > 16
            ? '비밀번호는 8~16자리여야 합니다.'
            : '',
        isError: value.trim() === '' || value.length < 8 || value.length > 16,
      };
    } else if (name === 'passwordCheck') {
      setPasswordCheck(value);
      validationErrors.passwordCheck = {
        message:
          value.trim() === ''
            ? '확인을 위하여 위와 동일하게 입력해주세요.'
            : value !== password
            ? '비밀번호가 일치하지 않습니다.'
            : '',
        isError: value.trim() === '' || value !== password,
      };
    } else if (name === 'nickname') {
      setNickname(value);
      validationErrors.nickname = {
        message: value.trim() === '' ? '닉네임을 입력해주세요.' : '',
        isError: value.trim() === '',
      };
    }

    setErrors(validationErrors);
  };

  // 유효성검사 확인 후 폼제출
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    inputFields.forEach((field) => {
      if (field.id === 'email' && email.trim() === '') {
        validationErrors[field.id] = { message: `${field.label}를 입력해주세요.`, isError: true };
      } else if (field.id === 'password' && password.trim() === '') {
        validationErrors[field.id] = { message: `8~16자리의 ${field.label}를 입력해주세요.`, isError: true };
      } else if (field.id === 'passwordCheck' && passwordCheck.trim() === '') {
        validationErrors[field.id] = { message: `확인을 위하여 위와 동일하게 입력해주세요.`, isError: true };
      } else if (field.id === 'nickname' && nickname.trim() === '') {
        validationErrors[field.id] = { message: '닉네임을 입력해주세요.', isError: true };
      }
    });

    Object.keys(errors).forEach((key) => {
      if (validationErrors[key] === undefined) {
        validationErrors[key] = errors[key];
      }
    });

    setErrors(validationErrors);

    const isFormValid = Object.values(validationErrors).every((error) => !error.isError);

    if (isFormValid) {
      console.log('회원가입이 완료되었습니다.');
      setNickname('');
      setEmail('');
      setPassword('');
      setPasswordCheck('');
      setErrors({});
      navigate(`/register-complete`);
    }
  };

  // 에러메세지 초기값 보여주기
  useEffect(() => {
    const validationErrors = {};

    inputFields.forEach((field) => {
      validationErrors[field.id] = errors[field.id];
    });

    setErrors(validationErrors);
  }, []);

  return (
    <>
      <TextAndBackBar title={'회원가입'} />
      <form className="mt-[25px] flex flex-wrap justify-center">
        {inputFields.map((field) => (
          <InputWrapper key={field.id}>
            <StyledLabel htmlFor={field.label}>{field.label}</StyledLabel>
            <div className="relative mt-[10px]">
              <Input
                id={field.id}
                name={field.id}
                autoComplete={field.type === 'password' ? 'new-password' : 'off'}
                type={field.type}
                value={
                  field.id === 'email'
                    ? email
                    : field.id === 'password'
                    ? password
                    : field.id === 'passwordCheck'
                    ? passwordCheck
                    : nickname
                }
                color={errors[field.id].isError ? '#ff0000' : '#d9d9d9'}
                onChange={(event) => validateField(field.id, event.target.value)}
              />
              {field.type === 'password' && (
                <svg
                  className="absolute top-1/2 right-[12px] translate-y-[-50%] pointer-events-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V10C4 9.45 4.196 8.979 4.588 8.587C4.98 8.195 5.45067 7.99933 6 8H7V6C7 4.61667 7.48767 3.43733 8.463 2.462C9.43834 1.48667 10.6173 0.999334 12 1C13.3833 1 14.5627 1.48767 15.538 2.463C16.5133 3.43833 17.0007 4.61733 17 6V8H18C18.55 8 19.021 8.196 19.413 8.588C19.805 8.98 20.0007 9.45067 20 10V20C20 20.55 19.804 21.021 19.412 21.413C19.02 21.805 18.5493 22.0007 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.021 16.804 13.413 16.412C13.805 16.02 14.0007 15.5493 14 15C14 14.45 13.804 13.979 13.412 13.587C13.02 13.195 12.5493 12.9993 12 13C11.45 13 10.979 13.196 10.587 13.588C10.195 13.98 9.99934 14.4507 10 15C10 15.55 10.196 16.021 10.588 16.413C10.98 16.805 11.4507 17.0007 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z"
                    fill="#D9D9D9"
                  />
                </svg>
              )}
            </div>
            {errors[field.id] && (
              <span
                className="text-[13px] mt-[12px] text-gray"
                style={{ color: errors[field.id].isError && '#ff0000' }}
              >
                {errors[field.id].message}
              </span>
            )}
          </InputWrapper>
        ))}
      </form>
      <LongButton contents={'가입하기'} onClick={handleSubmit} />
    </>
  );
};

export default RegisterPage;
