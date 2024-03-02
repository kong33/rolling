import styles from './BadgeRelation.module.scss';

const COLORS = {
  orange: 'orange',
  purple: 'purple',
  green: 'green',
  blue: 'blue',
};

function Relationship({ text = '지인', color = COLORS.orange, className }) {
  const classNames = `${styles.box} ${styles[color]} ${className || ''}`;

  return <div className={classNames}>{text}</div>;
}

export default Relationship;
