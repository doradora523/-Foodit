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
            className="absolute z-5 top-1/2 right-[12px] translate-y-[-50%] pointer-events-none"
            width="16"
            height="21"
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 21C1.45 21 0.979002 20.804 0.587002 20.412C0.195002 20.02 -0.000664969 19.5493 1.69779e-06 19V9C1.69779e-06 8.45 0.196001 7.979 0.588001 7.587C0.980001 7.195 1.45067 6.99933 2 7H3V5C3 3.61667 3.48767 2.43733 4.463 1.462C5.43834 0.486667 6.61734 -0.000665984 8 6.8306e-07C9.38334 6.8306e-07 10.5627 0.487667 11.538 1.463C12.5133 2.43833 13.0007 3.61733 13 5V7H14C14.55 7 15.021 7.196 15.413 7.588C15.805 7.98 16.0007 8.45067 16 9V19C16 19.55 15.804 20.021 15.412 20.413C15.02 20.805 14.5493 21.0007 14 21H2ZM2 19H14V9H2V19ZM8 16C8.55 16 9.021 15.804 9.413 15.412C9.805 15.02 10.0007 14.5493 10 14C10 13.45 9.804 12.979 9.412 12.587C9.02 12.195 8.54934 11.9993 8 12C7.45 12 6.979 12.196 6.587 12.588C6.195 12.98 5.99934 13.4507 6 14C6 14.55 6.196 15.021 6.588 15.413C6.98 15.805 7.45067 16.0007 8 16ZM5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45834 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7Z"
              fill="#D9D9D9"
            />
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
