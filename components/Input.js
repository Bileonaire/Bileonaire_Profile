import React from "react";

const Input = ({
  title,
  value,
  placeholder,
  type,
  id,
  onchange,
  required,
  show = true,
}) => {
  return (
    <>
      {show && (
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor={id}
          >
            {title}
          </label>
          <input
            required={required}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-grey-darker"
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={(e) => onchange(e.target.value)}
            value={value}
          ></input>
        </div>
      )}
    </>
  );
};

export default Input;
