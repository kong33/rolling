import { useState } from 'react';
import styles from '../../components/Input/Input.module.scss';

const useManageInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isBeenFocused, setIsBeenFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setIsBeenFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseActive = (e) => {
    if (e.target.value) setIsActive(true);
    else setIsActive(false);
  };

  const decideInputClass = () => {
    if (isFocused) return styles.inputFocused;
    else if (isActive) return styles.inputActive;
    else if (isBeenFocused && !isActive) return styles.inputError;
    else return styles.inputInactive;
  };

  const decidePClass = () => {
    if (!isFocused && isBeenFocused && !isActive) return styles.pError;
    else return styles.pDefault;
  };
  return {
    handleFocus,
    handleBlur,
    decideInputClass,
    handleMouseActive,
    decidePClass,
  };
};

export default useManageInput;
