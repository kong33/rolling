import { BUTTON_TYPE } from '../../../constants/button';
import styles from './ButtonArrow.module.scss';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import ArrowRight from '../../../assets/svg/ArrowRight';

function ButtonArrow({
  type = BUTTON_TYPE.button,
  direction = 'left',
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
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}

export default ButtonArrow;
