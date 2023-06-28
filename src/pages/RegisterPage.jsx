import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TextAndBackBar from '../components/common/navBar/TextAndBackBar';
import LongButton from '../components/common/LongButton';
import IdPasswordForm from '../components/common/IdPasswordForm';
import { debounce } from 'lodash';

const RegisterPage = () => {
  const inputFields = [
    { id: 'email', label: '아이디', type: 'email' },
    { id: 'password', label: '비밀번호', type: 'password' },
    { id: 'passwordCheck', label: '비밀번호 재확인', type: 'password' },
    { id: 'nickname', label: '닉네임', type: 'text' },
  ];
  const nicknameField = inputFields.find((field) => field.id === 'nickname');

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

  const validateField = useCallback(
    debounce((name, value) => {
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
    }, 300),
    [errors, emailRegex, existedEmail, setEmail, setPassword, setPasswordCheck, setNickname],
  );

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

    const isFormValid = Object.values(validationErrors).every((error) => !error.isError);

    setErrors(validationErrors);

    if (isFormValid) {
      console.log('회원가입이 완료되었습니다.');
      setNickname('');
      setEmail('');
      setPassword('');
      setPasswordCheck('');
      setErrors({});
      navigate(`/permission`);
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
        <div className="flex flex-wrap w-[360px]">
          {/* 아이디, 비밀번호, 비밀번호 재확인 */}
          {inputFields.slice(0, 3).map((field) => (
            <IdPasswordForm
              key={field.id}
              label={field.label}
              type={field.type}
              color={errors[field.id].isError ? '#ff0000' : '#d9d9d9'}
              onChange={(event) => validateField(field.id, event.target.value)}
              errors={errors[field.id]}
            />
          ))}
          {/* 닉네임 */}
          {nicknameField && (
            <IdPasswordForm
              key="nickname"
              autoComplete="off"
              label={nicknameField.label}
              type={nicknameField.type}
              color={errors.nickname.isError ? '#ff0000' : '#d9d9d9'}
              onChange={(event) => validateField('nickname', event.target.value)}
              errors={errors.nickname}
            />
          )}
        </div>
      </form>
      <LongButton contents={'가입하기'} onClick={handleSubmit} />
    </>
  );
};

export default RegisterPage;
