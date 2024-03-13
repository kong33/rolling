import { useState, useRef } from 'react';
import useClickOutside from '../useClickOutside';

const useManageDropdown = (options) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedLi, setClickedLi] = useState(options[0]);
  const dropDownRef = useRef(null);

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useClickOutside(dropDownRef, handleOutsideClick);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    setClickedLi(e.target.textContent);
  };

  return {
    dropDownRef,
    handleClick,
    isOpen,
    clickedLi,
  };
};
export default useManageDropdown;
