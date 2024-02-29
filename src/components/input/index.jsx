import './styles.scss';
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
        className={`input--defalut ${decideInputClass()}`}
        placeholder={placeholder}
        onChange={handleMouseActive}
      />
      <p className={decidePClass()}>{errorMassage}</p>
    </div>
  );
}

export default Input;
