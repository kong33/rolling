import { useState, useRef, useEffect } from 'react';

const useManageDropdown = (placeholders) => {
  const [isUlClicked, setIsUlClicked] = useState(false); //ul 클릭 -> 자동으로 blur됨.
  const [isLiClicked, setIsLiClicked] = useState(false);
  const [clickedLi, setClickedLi] = useState(placeholders[0]);
  //active : ul한번 클릭돼서 li 열렸을 때
  // focused:콜라서 닫힘
  // hovered: hover
  //아무것도 아닐 때 : inactive
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsUlClicked(false);
        setIsLiClicked(false);
        console.log('handleClickoutSide 동작', isUlClicked);
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
    if (isUlClicked && !isLiClicked) return 'select--active';
    else if (isLiClicked) return 'select--focused';
    else return 'select--inactive';
  };

  return {
    handleUlClicked,
    handleLiClicked,
    decideSelectClass,
    isUlClicked,
    dropDownRef,
    isLiClicked,
    clickedLi,
  };
};
export default useManageDropdown;
