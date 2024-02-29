import '../../styles/reset.scss';
import './styles.scss';

import ArrowDown from '../../assets/svg/ArrowDown';
import ArrowUp from '../../assets/svg/ArrowUp';
import useManageDropdown from '../../hooks/useManageDropdown/useManageDropdown';

function DropDown({ label, name, placeholders }) {
  const {
    handleUlClicked,
    handleLiClicked,
    handleUlMouseEnter,
    handleUlMouseLeave,
    handleLiMouseEnter,
    handleLiMouseLeave,
    decideSelectClass,
    isUlClicked,
    dropDownRef,
    clickedLi,
  } = useManageDropdown(placeholders);
  console.log(isUlClicked);
  return (
    <div ref={dropDownRef}>
      <label>{label}</label>
      {isUlClicked ? <ArrowDown /> : <ArrowUp />}
      <section className={'wrapper'}>
        <ul
          name={name}
          onClick={handleUlClicked}
          onMouseEnter={handleUlMouseEnter}
          onMouseLeave={handleUlMouseLeave}
        >
          <li className={`select--default ${decideSelectClass()}`}>
            {clickedLi}
          </li>
          {isUlClicked && (
            <section className={'ul--box'}>
              {placeholders.slice(1).map((placeholder, index) => (
                <li
                  value={placeholder}
                  key={placeholder}
                  onMouseEnter={handleLiMouseEnter}
                  onMouseLeave={handleLiMouseLeave}
                  onClick={handleLiClicked}
                  className={`option--default`}
                >
                  {placeholder}
                </li>
              ))}
            </section>
          )}
        </ul>
      </section>
    </div>
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
