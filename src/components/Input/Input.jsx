import styles from './Input.module.scss';
import useManageInput from '../../hooks/useManageInput/useManageInput';

function Input({ placeholder, errorMassage, label }) {
  const { handleClick, isValueExist, handleChange, inputRef, isError } =
    useManageInput();

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
      />
      {isError && <p className={styles.errormessage}>{errorMassage}</p>}
    </div>
  );
}

export default Input;
