import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import MyProfile from '../components/common/MyProfile';
import LongButton from '../components/common/LongButton';
import TextAndBackBar from '../components/common/navBar/TextAndBackBar';
import IdPasswordForm from '../components/common/IdPasswordForm';

import { EDIT, CHANGE_INFO } from '../static/constants';

// FIXME: 전체적으로 수정 필요
function ProfileEditPage() {
  const inputFields = [
    { id: 'email', label: '아이디', type: 'email' },
    { id: 'password', label: '비밀번호', type: 'password' },
    { id: 'passwordCheck', label: '비밀번호 재확인', type: 'password' },
  ];
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errors, setErrors] = useState({
    email: { message: '', isError: false },
    password: { message: '', isError: false },
    passwordCheck: { message: '', isError: false },
  });
  const navigate = useNavigate();
  // 유효성 검사
  const validateField = (name, value) => {
    const validationErrors = { ...errors };
    if (name === 'password') {
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
    }
    setErrors(validationErrors);
  };
  // 유효성검사 확인 후 폼제출
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    inputFields.forEach((field) => {
      if (field.id === 'password' && password.trim() === '') {
        validationErrors[field.id] = { message: `8~16자리의 ${field.label}를 입력해주세요.`, isError: true };
      } else if (field.id === 'passwordCheck' && passwordCheck.trim() === '') {
        validationErrors[field.id] = { message: `확인을 위하여 위와 동일하게 입력해주세요.`, isError: true };
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
      setPassword('');
      setPasswordCheck('');
      setErrors({});
      navigate(`/register-complete`);
    }
  };

  return (
    <div>
      <TextAndBackBar title={CHANGE_INFO} />
      <MyProfile />

      <form className="flex flex-wrap justify-center">
        {inputFields.slice(0, 3).map((field) => (
          <React.Fragment key={field.id}>
            <IdPasswordForm
              key={field.id}
              label={field.label}
              type={field.type}
              value={field.id}
              color={errors[field.id].isError ? '#ff0000' : '#d9d9d9'}
              onChange={(event) => validateField(field.id, event.target.value)}
              errors={errors[field.id]}
            />
          </React.Fragment>
        ))}
      </form>

      {/* TODO: 수정된 값으로 정보 변경하기 */}
      <LongButton contents={EDIT} onClick={handleSubmit} />
    </div>
  );
}
export default ProfileEditPage;
