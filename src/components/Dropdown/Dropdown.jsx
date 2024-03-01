import '../../styles/reset.scss';
import styles from './Dropdown.module.scss';
import ArrowDown from '../../assets/svg/ArrowDown';
import ArrowUp from '../../assets/svg/ArrowUp';
import useManageDropdown from '../../hooks/useManageDropdown/useManageDropdown';

function Dropdown({ label, name, placeholders }) {
  const {
    handleUlClicked,
    handleLiClicked,
    decideSelectClass,
    isUlClicked,
    dropDownRef,
    clickedLi,
  } = useManageDropdown(placeholders);

  return (
    <div className={styles.div} ref={dropDownRef}>
      <label className={styles.label}>{label}</label>

      <div className={styles.arrowWrapper}>
        {isUlClicked ? <ArrowDown /> : <ArrowUp />}
      </div>

      <section className={styles.wrapper}>
        <ul name={name} onClick={handleUlClicked}>
          <li className={`${styles.selectDefault} ${decideSelectClass()}`}>
            {clickedLi}
          </li>
          {isUlClicked && (
            <section className={styles.ulBox}>
              {placeholders.slice(1).map((placeholder) => (
                <li
                  value={placeholder}
                  key={placeholder}
                  onClick={handleLiClicked}
                  className={styles.optionDefault}
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

export default Dropdown;

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
