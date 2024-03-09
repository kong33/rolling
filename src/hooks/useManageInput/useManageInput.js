import { useState, useRef } from 'react';
import useClickOutside from '../useClickOutside';

const useManageInput = () => {
  const [isValueExist, setIsValueExist] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isBeenClicked, setIsBeenClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  const handleOutsideClick = () => {
    if (!isValueExist && isBeenClicked) setIsError(true);
  };
  const handleChange = (e) => {
    if (e.target.value) {
      setIsValueExist(true);
      setIsError(false);
      setInputValue(e.target.value);
    } else setIsValueExist(false);
  };
  const handleClick = () => {
    setIsError(false);
    setIsBeenClicked(true);
  };

  useClickOutside(inputRef, handleOutsideClick);
  return {
    isError,
    isValueExist,
    handleClick,
    handleChange,
    inputRef,
    inputValue,
  };
};

export default useManageInput;
