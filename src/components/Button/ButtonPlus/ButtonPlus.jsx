import { BUTTON_TYPE } from '../../../constants/button';
import styles from './ButtonPlus.module.scss';
import Plus from '../../../assets/svg/Plus';

function ButtonPlus({
  type = BUTTON_TYPE.button,
  className = '',
  onClick,
  disabled = false,
}) {
  const buttonType = BUTTON_TYPE[type] || BUTTON_TYPE.button;
  const classNames = `${styles.button} ${className}`;

  const handleClick = () => {
    if (typeof onClick !== 'function') return;
    onClick();
  };

  return (
    <button
      type={buttonType}
      className={classNames}
      onClick={handleClick}
      disabled={disabled}
    >
      <Plus />
    </button>
  );
}

export default ButtonPlus;
