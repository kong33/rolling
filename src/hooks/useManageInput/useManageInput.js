import { useState, useRef } from 'react';
import useClickOutside from '../useClickOutside';

const useManageInput = () => {
  const [isValueExist, setIsValueExist] = useState();
  const [isError, setIsError] = useState(false);
  const inputRef = useRef(null);

  const handleOutsideClick = () => {
    if (!isValueExist) setIsError(true);
  };
  const handleChange = (e) => {
    if (e.target.value) {
      setIsValueExist(true);
      setIsError(false);
    } else setIsValueExist(false);
  };
  const handleClick = () => {
    setIsError(false);
  };

  useClickOutside(inputRef, handleOutsideClick);
  return {
    isError,
    isValueExist,
    handleClick,
    handleChange,
    inputRef,
  };
};

export default useManageInput;
