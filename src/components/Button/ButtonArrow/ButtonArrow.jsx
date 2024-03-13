import styles from './ButtonArrow.module.scss';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import ArrowRight from '../../../assets/svg/ArrowRight';

function ButtonArrow({ direction = 'left', className = '', ...rest }) {
  const classNames = `${styles.button} ${className}`;

  return (
    <button className={classNames} {...rest}>
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}

export default ButtonArrow;
