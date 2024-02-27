import styles from './Button.module.scss';

const BUTTON_TYPE = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const STYLE_TYPE = {
  normal: 'normal',
  primary: 'primary',
  secondary: 'secondary',
};

function Button({
  children,
  type,
  styleType,
  onClick,
  className,
  width,
  height,
  fullWidth,
  disabled = false,
}) {
  const buttonType = BUTTON_TYPE[type] || BUTTON_TYPE.button;
  const pStyleType = STYLE_TYPE[styleType] || STYLE_TYPE.normal;
  const classNames = `${styles.button} ${styles[pStyleType]} ${styles[fullWidth] || ''} ${className || ''}`;

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
      style={{ width, height }}
    >
      {children}
    </button>
  );
}

export default Button;
