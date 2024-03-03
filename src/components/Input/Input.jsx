import styles from './Input.module.scss';
import useManageInput from '../../hooks/useManageInput/useManageInput';

function Input({ placeholder, errorMassage }) {
  const {
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
    decideInputClass,
    handleMouseActive,
    decidePClass,
  } = useManageInput();

  return (
    <div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onChange={handleMouseActive}
        className={`${styles.inputDefalut} ${decideInputClass()}`}
        placeholder={placeholder}
      />
      <p className={decidePClass()}>{errorMassage}</p>
    </div>
  );
}

export default Input;
