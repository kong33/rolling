import styles from './EnterNameInput.module.scss';

export default function EnterNameInput({ placeholder, label, name, ...rest }) {
  return (
    <div className={styles.div}>
      <h1 className={styles.label}>{label}</h1>
      <input
        placeholder={placeholder}
        name={name}
        type="text"
        {...rest}
        maxLength={40}
      />
    </div>
  );
}
