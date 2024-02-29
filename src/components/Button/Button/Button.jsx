import { BUTTON_SIZE, BUTTON_TYPE } from '../../../constants/button';
import styles from './Button.module.scss';

const STYLE_TYPE = {
  primary: 'primary',
  secondary: 'secondary',
  outlined: 'outlined',
};

function Button({
  children,
  type = BUTTON_TYPE.button,
  styleType = STYLE_TYPE.primary,
  size = BUTTON_SIZE.sm,
  onClick,
  className = '',
  disabled = false,
}) {
  const buttonType = BUTTON_TYPE[type] || BUTTON_TYPE.button;
  const buttonSize = BUTTON_SIZE[size] || BUTTON_SIZE.sm;
  const pStyleType = STYLE_TYPE[styleType] || STYLE_TYPE.primary;
  const classNames = `${styles.button} ${styles[buttonSize]} ${styles[pStyleType]} ${className}`;

  const handleClick = onClick
    ? () => {
        if (typeof onClick !== 'function') return;
        onClick();
      }
    : null;

  return (
    <button
      type={buttonType}
      className={classNames}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
