import styles from './Input.module.scss';

function Input({ placeholder, label, name, ...rest }) {
  return (
    <div className={styles.div}>
      <h1 className={styles.label}>{label}</h1>
      <input placeholder={placeholder} name={name} type="text" {...rest} />
    </div>
  );
}

export default Input;
