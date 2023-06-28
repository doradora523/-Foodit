import React from 'react';
import Input from './Input';

const IdPasswordForm = ({ key, label, type, value, onChange, color, errors, readOnly }) => {
  // readOnly 사용시 readOnly={true} 내려주기
  return (
    <div className="h-[77px] mb-[40px]">
      <label className="w-full text-[14px]" htmlFor={label}>
        {label}
      </label>
      <div className="relative mt-[10px]">
        <Input
          readOnly={type === 'email' ? readOnly : false}
          key={key}
          name={label}
          autoComplete={type === 'password' ? 'new-password' : 'off'}
          type={type}
          value={value}
          color={color}
          onChange={onChange}
          errors={errors}
        />
        {type === 'password' && (
          <svg
            className="absolute top-1/2 right-[12px] translate-y-[-50%] pointer-events-none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 아이콘 SVG 코드 */}
          </svg>
        )}
      </div>
      {errors.isError && (
        <span className="text-[13px] text-gray" style={{ color: color }}>
          {errors.message}
        </span>
      )}
    </div>
  );
};

export default IdPasswordForm;
