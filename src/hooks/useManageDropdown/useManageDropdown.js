import { useState, useRef, useEffect } from 'react';
import styles from '../../components/Dropdown/Dropdown.module.scss';

const useManageDropdown = (placeholders) => {
  const [isUlClicked, setIsUlClicked] = useState(false); //ul 클릭 -> 자동으로 blur됨.
  const [isLiClicked, setIsLiClicked] = useState(false);
  const [clickedLi, setClickedLi] = useState(placeholders[0]);

  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsUlClicked(false);
        setIsLiClicked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUlClicked = () => {
    setIsUlClicked(!isUlClicked);
  };
  const handleLiClicked = (e) => {
    setIsLiClicked(!isLiClicked);
    setIsUlClicked(!isUlClicked);
    setClickedLi(e.target.value);
  };

  const decideSelectClass = () => {
    if (isUlClicked && !isLiClicked) return styles.selectActive;
    else if (isLiClicked) return styles.selectFocused;
    else return styles.selectInactive;
  };

  return {
    handleUlClicked,
    handleLiClicked,
    decideSelectClass,
    isUlClicked,
    dropDownRef,
    clickedLi,
  };
};
export default useManageDropdown;
