import styles from './Input.module.scss';
import useManageInput from '../../hooks/useManageInput/useManageInput';

function Input({ placeholder, errorMassage, label, name }) {
  const {
    handleClick,
    isValueExist,
    handleChange,
    inputRef,
    isError,
    inputValue,
  } = useManageInput();

  return (
    <div ref={inputRef}>
      <h1 className={styles.label}>{label}</h1>
      <input
        placeholder={placeholder}
        onClick={handleClick}
        onChange={handleChange}
        className={
          isError ? styles.error : isValueExist ? styles.active : styles.input
        }
        name={name}
        type="text"
        value={inputValue}
        required
      />
      {isError && <p className={styles.errormessage}>{errorMassage}</p>}
    </div>
  );
}

export default Input;
