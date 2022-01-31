import React, { useRef, useEffect } from "react";
import ReactInputMask from "react-input-mask";
import { useField } from "@unform/core";

const Input = ({ name, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    if (mask) {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
        setValue(ref, value) {
          ref.setInputValue(value);
        },
        clearValue(ref) {
          ref.setInputValue("");
        },
      });
    } else {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
      });
    }
  }, [fieldName, registerField, mask]);

  return mask ? (
    <ReactInputMask
      ref={inputRef}
      mask={mask}
      defaultValue={defaultValue}
      {...rest}
    />
  ) : (
    <input ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
};

export default Input;