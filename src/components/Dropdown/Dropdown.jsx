import '../../styles/reset.scss';
import styles from './Dropdown.module.scss';
import ArrowDown from '../../assets/svg/ArrowDown';
import ArrowUp from '../../assets/svg/ArrowUp';
import useManageDropdown from '../../hooks/useManageDropdown/useManageDropdown';

function Dropdown({ label, name, options }) {
  const { dropDownRef, handleClick, isOpen, clickedLi } =
    useManageDropdown(options);

  return (
    //ref를 걸어주기 위해 div 로 감쌈
    <div className={styles.dropdownWrapper} ref={dropDownRef}>
      <label className={styles.label}>{label}</label>

      <div className={styles.arrowWrapper}>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>

      <section className={styles.wrapper}>
        <ul name={name} onClick={handleClick}>
          <li className={styles.select}>{clickedLi}</li>
          {isOpen && (
            <section className={styles.options}>
              {options.map((option) => (
                <li
                  value={option}
                  key={option}
                  onClick={handleClick}
                  className={styles.option}
                >
                  {option}
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
