import { BUTTON_SIZE, BUTTON_TYPE } from '../../../constants/button';
import styles from './Button.module.scss';

const STYLE_TYPE = {
  normal: 'normal',
  primary: 'primary',
  secondary: 'secondary',
};

function Button({
  children,
  type,
  styleType,
  size = BUTTON_SIZE.sm,
  onClick,
  className,
  disabled = false,
  width,
}) {
  const buttonType = BUTTON_TYPE[type] || BUTTON_TYPE.button;
  const buttonSize = BUTTON_SIZE[size] || BUTTON_SIZE.sm;
  const pStyleType = STYLE_TYPE[styleType] || STYLE_TYPE.normal;
  const classNames = `${styles.button} ${styles[buttonSize]} ${styles[pStyleType]} ${className || ''}`;

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
      style={{ width }}
    >
      {children}
    </button>
  );
}

export default Button;
