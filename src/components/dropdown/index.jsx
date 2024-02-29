import { useState } from 'react';
//import ArrowDown from '../../assets/images/arrow_down.svg';
//import ArrowUp from '../../assets/images/arrow_up.svg';
import './styles.scss';

function DropDown({ label, name, placeholders, id }) {
  const [isClicked, setIsClicked] = useState(false); //ul 클릭 -> 자동으로 blur됨.

  const [isLiHovered, setIsLiHovered] = useState(false);
  const [isLiClicked, setIsLiClicked] = useState(false);
  //const [isActive, setIsActive] = useState(false); //li 클릭 하고 blur하면 active
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleLiClick = () => {
    setIsLiClicked(true);
  };
  const handleLiMouseEnter = () => {
    setIsLiHovered(true);
  };
  const handleLiMouseLeave = () => {
    setIsLiHovered(false);
  };

  const handleMouseEnter = (e) => {
    //색 진하게
    e.target.style.backgroundColor = $color - gray - 100;
  };

  const handleMouseLeave = (e) => {
    //색 안진하게
    e.target.style.backgroundColor = $color - white;
  };

  const decideSelectClass = () => {
    if (isClicked && !isLiClicked) return 'select--active';
    else if (isLiClicked) return 'select--focused';
    else if (isHovered) return 'select--hover';
    else return 'select--inactive';
  };
  const decideOptionClass = () => {
    if (isLiHovered) return 'option--hovered';
    else return 'option--default';
  };

  return (
    <form
      method="POST"
      action={`https://rolling-api.vercel.app/2-7/messages/${id}/`}
    >
      <label>{label}</label>
      {/* {isClicked ? <ArrowDown /> : <ArrowUp />} */}
      <ul
        name={name}
        id={name}
        onClick={handleClick}
        className={`select--default ${decideSelectClass()}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isClicked && (
          <>
            {placeholders.map((placeholder) => (
              <li
                value={placeholder}
                key={placeholder}
                onMouseEnter={handleLiMouseEnter}
                onMouseLeave={handleLiMouseLeave}
                onClick={handleLiClick}
              >
                {placeholder}
              </li>
            ))}
          </>
        )}
      </ul>
    </form>
  );
}

export default DropDown;

//  데이터 전송 방식 {
//   "team": "string",
//   "recipientId": 0,
//   "sender": "string",
//   "profileImageURL": "string",
//   "relationship": "친구", // name
//   "content": "string",
//   "font": "Noto Sans" //name
// }
//map의 맨 첫번쨰 요소가 default로 감.
