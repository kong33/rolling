import styles from './Button.module.scss';

const STYLE_TYPE = {
  primary56: 'primary56',
  primary40: 'primary40',
  secondary: 'secondary',
  outlined56: 'outlined56',
  outlined40: 'outlined40',
  outlined36: 'outlined36',
  outlined28: 'outlined28',
};

const BUTTON_SIZE = {
  free: 'free', // width auto
  sm: 'sm', // width 92px
  md: 'md', // width 280px
  lg: 'lg', // width 320px
  xl: 'xl', // width 720px
};

function Button({
  children,
  styleType = STYLE_TYPE.primary56,
  size = BUTTON_SIZE.free,
  className = '',
  ...rest
}) {
  const classNames = `${styles.button} ${styles[size]} ${styles[styleType]} ${className}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}

export default Button;
