import styles from './ButtonPlus.module.scss';
import Plus from '../../../assets/svg/Plus';

function ButtonPlus({ className = '', ...rest }) {
  const classNames = `${styles.button} ${className}`;

  return (
    <button className={classNames} {...rest}>
      <Plus />
    </button>
  );
}

export default ButtonPlus;
