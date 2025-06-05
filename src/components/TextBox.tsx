import React from 'react';

interface TextBoxProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
}

const TextBox: React.FC<TextBoxProps> = ({ id, label, type, placeholder }) => {
  const inputClasses = "w-full px-4 py-2 rounded-lg bg-[#261b25] border border-[#c59f61] focus:outline-none focus:ring-2 focus:ring-[#db924c] focus:border-[#db924c] text-[#c59f61]";

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-[#c59f61] mb-1">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className={`${inputClasses} h-32 resize-y`}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default TextBox;